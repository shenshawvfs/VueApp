/*
 *   Copyright (c) 2019-2023 Kibble Game Studios Inc, All Rights Reserved
 */
import { mapActions, mapState, mapStores } from 'pinia'

const pascalCase = str => str.replace( /(\w)(\w*)/g, (g0,g1,g2) => { return g1.toUpperCase() + g2.toLowerCase() });
const camelCase = str => str.replace( /(?:^\w|[A-Z]|\b\w)/g, ( g0, gi ) => { return gi === 0 ? g0.toLowerCase() : g0.toUpperCase() });

export default class Controller {

    constructor( name = 'component-name', componentList = [] ) {
        this.name = name;
        this.vm = {};
        this.data = () => { return {...this.vm }};
        this.props = {};
        this.emits = {};
        this.components = { ...componentList };
        this.computed = {/* ...mapGetters('account', ['status']) */ }
        this.methods =  {/*...mapActions('account', ['login', 'logout']),*/ };

        this._extractMethods(['compute_', 'compute','on_', 'on', 'vue_', 'vue', 'get_', 'get']);
        this.methods["url"] = ( src = "default.jpg") => {
            // allows us to dynamically specify an asset from the assets folder
            const images = require.context(`../assets`, false, /\.png$|\.jpg$/)
            return images(`./${src}`)
        }
    }

    // VUEX
    injectGetters( getterMap ) { Object.assign( this.computed, mapStores( getterMap ))}
    injectActions( actionMap ) { Object.assign( this.methods, mapActions( actionMap ))}

    // Pinia and one at a time, chain them
    injectStore( storeMap ) {
        Object.assign( this.computed, mapStores( storeMap ))
        return this
    }

    _extractMethods( prefixList ) {

        // Private helper
        let _strip = ( str, prefix ) => str.replace( new RegExp(`^${prefix}`), '');

        // This extracts the methods from the child object
        let localMethods = Object.getPrototypeOf( this );
        delete localMethods.constructor;

        let methodNameList = Object.getOwnPropertyNames( localMethods );
        for (let methodName of methodNameList) {

            // all methods by default are added to methods
            this.methods[ methodName ] = localMethods[ methodName ]
            for (let prefix of prefixList) {

                if (methodName.startsWith( prefix )) {

                    delete this.methods[ methodName ];
                    let newName = _strip( methodName, prefix );

                    // Camel case the name
                    newName = newName.charAt(0).toLowerCase() + newName.slice(1);
                    switch (prefix) {
                        case "compute_":
                        case "compute":
                        case "get_":
                        case "get":
                            this.computed[ newName ] = localMethods[ methodName ];
                            break;

                        case "on_":
                        case "on":
                        case "vue_":
                        case "vue":
                            // Add hooks here...
                            /*
                            this.beforeCreate()
                            this.created()

                            this.beforeMount()  // component reveal - like route change
                            this.mounted()

                            this.beforeUpdate()   // DOM Updates
                            this.updated()

                            this.beforeDestroy()
                            this.destroyed()
                            */
                            this[ newName ] = localMethods[ methodName ];
                            break;

                        default:
                            break;
                    }
                }
            }
        }
    }
}
/*
 * License
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:

 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.

 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 */



