/**
@name:  PGController is a base class that abstracts Vue.js components for us in the PG Arcade site.

@copyright: (c) 2018. Kibble Games Inc, All Rights Reserved.

@usage:
    let $ctrl = new PGController("optionalName")
        .viewModel( {} )
        .bindings({ nicknameProp: String })
        .filters( {} )   // optional
        .watches( {} )   // optional
        .template('<section></section>')                // Choose ONE of the last three
        .templateURL('./partials/template.html')
        .templateVUE('./views/singleFileView.vue');

    export default new Vue.component('tagName', $ctrl.vueOptions );

 */
'use strict';

// @FUTURE: import Vue from '../dist/vue.esm.browser.js'

import HTTP from "./http.js";

const DEBUG = true;

export default class PGController {

    constructor( ...options ) {
        this.name = 'aComponent';
        this.vm = {};
        this.props = {};
        this.filters = {};
        this.methods = {};
        this.watches = {};
        Object.assign( this, options );        
    }

    tag( componentName ) {
        this.name = componentName;
        return this
    }

    viewModel( model = {} ) {
        this.vm = { ...model };
        return this
    }

    bindings( props = {} ) {
        this.props = { ...props };
        return this
    }

    template( markup = "") {
        this.template = markup;
        return this
    }

    controller( methods = {} ) {
        this.methods = { ...methods };
        return this
    }
    
    async templateURL( templateURI = "") {
        let markup = await HTTP.get( templateURI );
        return this.template( markup )
    }

    async templateVUE( templateVUEURI = "") {

        if (!templateVUEURI.endsWith(".vue") && !templateVUEURI.endsWith(".html")) 
            return this;

        let markup = await HTTP.get( templateVUEURI );
        if (!templateVUEURI.endsWith(".vue"))
            return this.template( markup );
            
        let parser = new DOMParser();
        let partialHTMLDoc = parser.parseFromString( markup, "text/html");
        // is there a <template> tag if so get the innerhtml, else use the whole thing.
        markup = partialHTMLDoc.getElementsByTagName('template')[0].innerHTML;

        let styleNode = partialHTMLDoc.getElementsByTagName('style')[0];
        document.querySelector('head').appendChild( styleNode );
        
        //parse <script></script> tag
        let scriptNode = partialHTMLDoc.getElementsByTagName('script')[0].innerHTML;
        let ctrl = (Function( scriptNode ))();        
        return  this.tag( ctrl.name )
                    .viewModel( ctrl.vm )
                    .bindings( ctrl.props )
                    .controller( ctrl.methods )
                    .template( markup );
    }

    get options() { 
        return {
            name:     this.name,
            props:    this.props,
            template: this.template,
            data: () => { return this.vm  },
            methods: this.methods,
            filters: this.filters,
            watches: this.watches
        }
    }
}