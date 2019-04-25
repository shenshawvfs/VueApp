/*
Sample component using Vue.js
Copyright (c) 2019. Scott Henshaw, Kibble Online Inc. All Rights Reserved.

<sample-component widget="Sample" enum="SURFACE" available="true" v-bind:author="{ a: someObject }">
    <!-- Injected sample HTML code here -->
    <div id="sample-inner"></div>
</sample-component>

Component does not require node, webpack, vuecli, just a browser - for development only
*/
'use strict';

import VUEController from '../lib/VueController.js';

class Controller extends VUEController {

    constructor() {
        super();

        // internal stuff, not the template variables or properties
        this.style = `
            .sample-bar input {
                color: green;
            }`;

        // controller attributes available for use in the template, methods too
        this.ctrl = {
            name:  "Scott",

            doSomething: this.doSomething
        }
    }

    // Add template methods here...
    //--------------------------------------------------------
    doSomething() {
        // trigger this inside the template...
        console.log('did something');
    }
}

export default Vue.component('sample-component', {
        props: {
            widget:    String,
            enum:      Number,
            available: Boolean,
            author:    Object
        },
        template: `
        <label class="sample-bar">
            {{ ctrl.name }}
            <input v-bind:value="widget" v-on:input="$emit('input', $event.target.value )">
            <slot></slot>
        </label>`,
        data: () => { return new Controller() }
    });
