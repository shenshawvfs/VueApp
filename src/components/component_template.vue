<!--
<pg-xxx></pg-xxx>
@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>
    <div>{{ title }}</div>
    <div><!-- Put your HTML template here--></div>
    <button @click="doIt()">Do it!</button>
</template>

<script>
    // Import components we need, model objects
    // import SubComponent from './sub_component.js'

    const viewModel = {
        // attrib used in template, part of this. for other modules that import this
        title: 'Sample Component'
    }

    // Add controsller methods to this object
    const methods = {
        doIt() {
            // your code here
        }
    }

    // export a definition object to use to create the vue component
    export default {
        name:       'a-component',
        props:      { /* list of properties */ },
        methods,      // Methods are not to be an object with prototype methods.
        components: { /* SubComponent */ },
        data()      { return viewModel }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only
<style scoped> -->
<style>
</style>