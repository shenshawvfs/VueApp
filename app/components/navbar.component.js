/*
Navbar component using Vue.js
Copyright (c) 2019. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
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
            navMenu:[
                { section: "Home" },
                { section: "About" }
            ],
        }
    }

    // Add template methods here...
    //--------------------------------------------------------
}

export default Vue.component('pgNavbar', {
        template: `
        <nav id="navigation-wrapper" class="grid-nav area vue-component">
            <div id="menu-container" class="menu flexbox">
                <div class="navbar flexitem">
                    <ul id="ul-sidenav">
                        <li id="li-sidenav" v-for="(item, index) in ctrl.navMenu" :key="index">
                            <router-link :to="{ name:item.section }">{{ item.section }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`,
        data: () => { return new Controller() }
    });
