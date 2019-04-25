/*
Home component using Vue.js
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
            name:  "Home",
        }
    }

    // Add template methods here...
    //--------------------------------------------------------
    doSomething() {
        // trigger this inside the template...
        console.log('did something');
    }
}

export default Vue.component('pgHome', {
        template: `        
        <div class="home">
            <div>Welcome to Your {{ ctrl.name }}</div>
        </div>`,
        data: () => { return new Controller() }
    });
