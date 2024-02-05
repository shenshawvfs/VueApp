import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router.js'

// import './assets/main.css'

import '@/assets/style-base.css'
import '@/assets/style-grid.css'
import '@/assets/style-flex.css'
import '@/assets/style-menu.css'

class Main {

    constructor () {

        this.vue = createApp( App );
        this.vue.use( createPinia() );
        this.vue.use( router );

        this.vue.component( App );
        this.vue.mount('#app')
    }
}

// Main entry point of the application
document.addEventListener('DOMContentLoaded', event => {

    const app = new Main()
})
