<!--
VFS VUE Single File Componenet
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>
    <nav id="navigation-wrapper" class="grid-nav area vue-component">
        <div id="menu-container" class="menu flexbox">
            <div class="navbar flexitem">
                <ul id="ul-sidenav">
                    <li id="li-sidenav" v-for="(item, index) in navMenu" :key="index">
                        <router-link :to="{ name:item.section }">{{ item.section }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
class Controller {

    constructor() {
        this.vm = {
            navMenu:[
                { section: "Home" },
                { section: "About" }
            ]
        };
    }
}

const ctrl = new Controller();
module.exports = { data() { return ctrl.vm; }  }

</script>

<style>
</style>