<!--
<pg-navbar />

@copyright (c) 2022. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<script>
    import Controller from '@/plugins/controller'

    class NavbarController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                navMenu:[
                    { section: "About" },
                    { section: "Home" },
                ]
            };
        }
    }

    export default new NavbarController('pgNavbar');

</script>
<template>

    <nav class="grid-nav">
        <div class="flexbox menu">
            <div class="flexitem navbar">
                <ul id="ul-sidenav">
                    <li id="li-sidenav" v-for="(item, index) in navMenu" :key="index">
                        <router-link :to="{ name:item.section }">{{ item.section }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>
<style scoped>
    /* navigation bar */
    .menu { background: rgba(0, 0, 0, 0); }

    .navbar{
        margin-top: 2em;
        width: 100%;
        height: 100%;
    }
</style>