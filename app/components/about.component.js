/*
About Component using VUE.
Copyright (c) 2019. Scott Henshaw, Kibble Online Inc. All Rights Reserved.

<pg-about></pg-about>

*/
'use strict';

import VUEController from '../lib/VueController.js';

class Controller extends VUEController {

    constructor() {
        super();

        // internal stuff, not the template variables or properties
        //this.style = ``;
        
        // put view model vars here...
        this.ctrl = {
            name: 'About',
        }
    }

    // Add template methods here...
    //--------------------------------------------------------
}

export default Vue.component('pgAbout', {
        template: `
        <div class="about">
            <div>{{ ctrl.name }} your Vue.js App</div>
        </div>`,
        data: () => { return new Controller() }
    });
