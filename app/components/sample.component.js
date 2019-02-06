/*
VUE App's Component.
Copyright (c) 2019. Scott Henshaw, Kibble Online Inc. All Rights Reserved.

<sample-component widget="Sample" enum="SURFACE" available="true" v-bind:author="{ a: someObject }">
    <!-- Injected sample HTML code here -->
    <div id="sample-inner"></div>
</sample-component>

*/
'use strict';

import VUEController from '../lib/VUEController.js';

class SampleController extends VUEController {

    constructor() {
        super();

        // internal stuff, not the template variables or properties
        this.style = `
            .sample-bar input {
                color: green;
            }`;
    }

    // Add template methods here...
    //--------------------------------------------------------
    doSomething() {
        // trigger this inside the template...
        let debug = true;

    }

    
}

export default Vue.component('sample-component', {
        name: 'sample-component',
        props: {
            widget:    String,
            enum:      Number,
            available: Boolean,
            author:    Object
        },
        methods: new SampleController(),    
        template: `
            <label class="sample-bar">
                {{ name }}
                <input v-bind:value="widget" v-on:input="$emit('input', $event.target.value )">
                <slot></slot>
            </label>`,
        data: () => { 
            return { 
                name: "Scott" 
            } 
        },  
    });
