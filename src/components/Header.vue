<!--
VFS VUE Single File Component

<pg-header />

Copyright (c) 2022. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section>
        <header class="flexbox">
            <div class="logo flexitem" @click="goHome( event )"></div>
            <slot class="flexitem"></slot>
            <div class="title flexitem">
                <h1>{{ title }}</h1>
                <h3>{{ subtitle }}</h3>
            </div>
        </header>
    </section>

</template>
<script>
    import Controller from '@/plugins/controller'

    class HeaderController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                title: "Demo Vue App",
                subtitle: "VFS Programming for Games",
            }
        }

        goHome( event ) {
            // do some router magic here to actualy change the URL
            console.log("Going home now!");
            location.href = "./index.html";
        }
    }

    export default new HeaderController('pgHeader');

</script>
<style scoped>
    header {
        background: #D10034;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 4px 5px -5px #222;
    }

    .title h1, .title h3 {
        float:right;
        margin-right: 2vw;
        text-align:right;
        width: 100%;
    }
</style>