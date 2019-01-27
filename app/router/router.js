/*
VUE App's MAIN Component.
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
'use strict';
/*
@FUTURE:
    import Vue from './dist/vue.esm.browser.js'
    import VueRouter from './dist/vue-router.esm.js'

    Vue.use(VueRouter)
*/

class Route {

    constructor( thePath = "", theTitle = "", theTemplate = '<div></div>') {

        this.path = thePath;
        this.name = theTitle;
        this.template = theTemplate;
        this.meta = {
            breadcrumb: [
                { name: theTitle }
            ]
        },
        this.vm = {
            display: true
        }
    }

    data() { return this.vm }
}


export default new VueRouter({ 
    //mode:   'history',
    routes: [ 
        new Route('/',      'Home',  `<pg-home v-show="!display"></pg-home>`),        
        new Route('/about', 'About', `<pg-about v-show="!display"></pg-about>`),
    ]
});