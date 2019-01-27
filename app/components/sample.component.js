/*
VUE App's Component.
Copyright (c) 2019. Scott Henshaw, Kibble Online Inc. All Rights Reserved.

<sample-component widget="Sample" enum="SURFACE" available="true" v-bind:author="{ a: someObject }">
    <!-- Injected sample HTML code here -->
    <div id="sample-inner"></div>
</sample-component>

*/
'use strict';

import PGComponent from '../lib/PGController.js';

const module = new PGComponent()
        .templateVUE('app/views/Sample.vue')
            .then( m => Vue.component('sampleComponent', m.options ) );

export default module;

