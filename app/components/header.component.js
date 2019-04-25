/*
Header Component using VUE.
Copyright (c) 2019. Scott Henshaw, Kibble Online Inc. All Rights Reserved.


*/
'use strict';

import VUEController from '../lib/VueController.js';

class Controller extends VUEController {

    constructor() {
        super();

        // internal stuff, not the template variables or properties
        //this.style = ``;
        this.ctrl = {
            title:    "VUE Template Title",
            subtitle: "A Beggining",

            goHome:   this.goHome
        };        
    }

    // Add template methods here...
    //--------------------------------------------------------
    goHome( event ) {
        console.log("Going home now!");
        location.href = "./";
    }
}

export default Vue.component('pgHeader', {
        template: `
        <header id="header-wrapper" class="grid-header area vue-component">
            <div id="header-container" class="header flexbox">
                <div class="logo flexitem" @click="ctrl.goHome"></div>
                <slot class="flexitem"></slot>
                <div class="title flexitem">
                    <h1>{{ ctrl.title }}</h1>
                    <h3>{{ ctrl.subtitle }}</h3>
                </div>
            </div>
        </header>`,
        data: () => { return new Controller() }
    });
