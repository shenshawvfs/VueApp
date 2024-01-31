<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="flexbox columns about">
        <h1 class="flexitem left title">About</h1>
        <div class="flexitem dialog">
            <h3 class="title">Welcome to {{ name }}</h3>
            <p>This {{ name }} is your Vue.js App</p><br/>
            <p>
            VUE is a framework that allows us to break
            the front end into manageable and resusable components
            </p><br/>
            <p>
            There are a lot of moving parts to VUE, like other frameworks it provides the
            structure, you provide components and content.  Scalability and generating
            applications quickly is the goal.  A template like this one helps to quickstart
            your app.
            </p><br/>
            <p>
            This basic view is called a route edge or just a route.  This is the root edge.
            </p><br/>
        </div>
        <SampleComponent title="A Simple Test too" />
        <SampleControllerComponent title="OOP Test"/>
    </section>

</template>
<script>
    import Controller from '@/plugins/controller'
    import SampleComponent from '@/components/SampleComponent.vue'
    import SampleControllerComponent from '@/components/SampleControllerComponent.vue';

    class AboutController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'VFS Vue Template',
            }
        }
    }

    export default new AboutController('About',{ SampleComponent, SampleControllerComponent });

</script>
<style scoped>
    /* Local styles for this template */
    .about {
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        padding: 2rem;
        height: 78vh;
        width: 80vw;
    }

</style>

