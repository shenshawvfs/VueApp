/*
VUE App's MAIN Component.
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
'use strict';

//This is were we register every components that is instantiated in this Main Root Component
import Header from './components/header.component.js';
import Navbar from './components/navbar.component.js';
import Sidebar from './components/sidebar.component.js';

import Home from './components/home.component.js';
import About from './components/about.component.js';
import Sample from './components/sample.component.js';


// registering(globally) our router to our root #app
import router from './router/router.js'; 

// Main entry point of the application
document.addEventListener('DOMContentLoaded', event => {
    
    new Vue({ router }).$mount('#pg-app');
});