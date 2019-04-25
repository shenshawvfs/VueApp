/*
Sidebar component using Vue.js
Copyright (c) 2019. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
'use strict';

import VUEController from '../lib/VueController.js';

class Controller extends VUEController {

    constructor() {
        super();

        // internal stuff, not the template variables or properties
        //this.style = ``;

        // controller attributes available for use in the template, methods too
        this.ctrl = {
            title:       "My Sidebar",
            description: "Application Name"
        }
    }

    // Add template methods here...
    //--------------------------------------------------------
}

export default Vue.component('pgSidebar', {
        template: `
        <aside id="sidebar-wrapper" class="grid-side area vue-component">
            <div id="sidebar-container" class="sidebar flexbox">
                <div class="side-item">
                    <h2>{{ ctrl.title }}</h2>
                    <h4>{{ ctrl.description }}</h4>
                </div>
                <pg-navbar></pg-navbar>
                <slot></slot>
            </div>
        </aside>`,
        data: () => { return new Controller() }
    });
