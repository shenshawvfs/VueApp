/**
@name:  PGComponent is a base class that abstracts Vue.js components for us in the PG Arcade site.

@copyright: (c) 2018. Kibble Games Inc, All Rights Reserved.

@usage:
    new PGComponent("k-name")
        .model( {} )
        .filters( {} )   // optional
        .watches( {} )   // optional
        .markup( {} )

    new PGComponent("k-name")
        .model( {} )
        .filters( {} )   // optional
        .watches( {} )   // optional
        .fetchMarkup("template-name.html");

*/
'use strict';

// @FUTURE: import Vue from '../dist/vue.esm.browser.js'

//import HTTP from "./http.js";

const DEBUG = true;

class PGComponent {

    constructor( defn = {} ) {

        this.__private__ = {
            uri: "",
            view: null
        };

        // use the httpVueLoader to load the module.exports from the .vue file,
        // then stash it here.

        // these should all be accessors and the actual data private.
        this.props = (defn.hasOwnProperty('props') ? defn.props : {});
        this.vm = (defn.hasOwnProperty('vm') ? defn.vm : {});
        this.methods = (defn.hasOwnProperty('methods') ? defn.methods : {});
        this.filters = (defn.hasOwnProperty('filters') ? defn.filters : {});
        this.watches = (defn.hasOwnProperty('watches') ? defn.watches : {});
    }

    get vueOptions() {
        return {
            props:    this.props,
            template: this.template,
            data: () => { return this.vm  },
            methods: this.methods,
            filters: this.filters,
            watches: this.watches
        }
    }

    model( viewModel = {} ) {
        this.vm = viewModel;
        return this; // so we can chain things 
    }

    handlers( vmMethods = {} ) {
        this.methods = vmMethods;
        return this;
    }

    setFilters( vmFilter = {} ) {
        this.filters = vmFilter;
        return this;
    }

    setWatches( vmWatches = {} ) {
        this.watches = vmWatches;
        return this;
    }

    component( name = 'k-component', templateURI = "", defn = {} ) {

        Vue.component( name, resolve => {
            
            HTTP.get( templateURI )
                .then( markup => {
                    this.template = markup;
                    // vmMethods = methods from own properties prefixed with view
                    resolve( this.vue );
                })
        });
    }

    componentFromMarkup( name = 'k-component', templateMarkup = this.template, viewModel = this.vm, vmMethods = {} ) {

        this.template = templateMarkup;
        this.model = viewModel;

        Vue.component( name, this._asVueData() );
    }
    
    fetchTemplate( templateMarkupURI = this.__private__.uri ) {

        return new Promise( ( resolve, reject ) => {

            if (templateMarkupURI.endsWith(".vue") || templateMarkupURI.endsWith(".html")) {

                HTTP.get( templateMarkupURI )
                    .then( markup => {

                        if (templateMarkupURI.endsWith(".vue")) {

                            let parser = new DOMParser();
                            let partialHTMLDoc = parser.parseFromString( markup, "text/html");
                            // is there a <template> tag if so get the innerhtml, else use the whole thing.
                            let elList = partialHTMLDoc.getElementsByTagName('template');
                            markup = elList[0].innerHTML;

                            /*
                            parse <script></script> tag
                            create fn = Function( ...params, scriptSrc )
                            module.exports = (fn)( params, scriptSrc );
                            */
                        }
                        resolve( markup );
                });

            } else {

                resolve( templateMarkupURI );
            }
        });
    }
}