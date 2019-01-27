/*
VUE App's MAIN Component.
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
'use strict';

import PGComponent from './lib/PGController.js';

//This is were we register every components that is instantiated in this Main Root Component
const components = {
    //Home:    Vue.component("pg-home",    httpVueLoader("app/views/Home.vue")),
    Home:    new PGComponent().templateVUE('app/views/Home.vue')
                .then( $ctrl => Vue.component( $ctrl.name, $ctrl.options )),
    About:   Vue.component("pg-about",   httpVueLoader("app/views/About.vue")),
    Header:  Vue.component("pg-header",  httpVueLoader("app/views/Header.vue")),
    Sidebar: Vue.component("pg-sidebar", httpVueLoader("app/views/Sidebar.vue")),
    Navbar:  Vue.component("pg-navbar",  httpVueLoader("app/views/Navbar.vue")),
};

const Sample = new PGComponent().templateVUE('app/views/Sample.vue')
    .then( $ctrl => {
        Vue.component( $ctrl.name, $ctrl.options )
    });

// registering(globally) our router to our root #app
import router from './router/router.js'; 

// Main entry point of the application
document.addEventListener('DOMContentLoaded', event => {
    
    new Vue({ router, components }).$mount('#pg-app');
});