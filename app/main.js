/*
VUE App's MAIN Component.
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
'use strict';
/*
@FUTURE:
    import Vue from './dist/vue.esm.browser.js'
    import VueRouter from './dist/vue-router.esm.js'

    Vue.use(VueRouter)
*/

//This is were we register every components that is instantiated in this Main Root Component.
import Header from  './views/Header.vue';
import Sidebar from './views/Sidebar.vue'
//import { Footer } from  './components/footer.js' 

//registering(globally) our router to our root #app
import router from './router/router.js' 

class App {

    constructor () {
        this.view = new Vue({ 
            router,
            /* render: h => h( this ) */
        }).$mount('#app');

        this.run();
    }

    run() {
        // Run an interval or requestAnimationFrame here if required.
    }
}

// Main entry point of the application
document.addEventListener('DOMContentLoaded', event => {
    
    const app = new App();
});