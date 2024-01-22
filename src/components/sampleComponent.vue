<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section class="component-style">  <!-- Just one main element per template -->
        <div>{{ title }}</div>
        <div>
            <!-- Put your HTML template here-->
            <slot></slot>

            <div v-if="visible">
                This starts visible, but push the button below
            </div>
            <div v-else>
                THis is now visible because you pushed the button
            </div>

        </div>
        <button @click="doIt( event )">Do it!</button>
    </section>

</template>
<script setup>
    import { ref } from 'vue'

    defineProps({
        title: String
    });

    let visible = ref( true );

    const doIt = ( event ) => {
        // Yes the same old event object from before
        visible.value = !visible.value
    }

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .component-style {
        display: flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:space-evenly;
        align-content: flex-start;
        align-items:flex-start;
    }

    .component-item {
        flex-grow: inherit;
        flex-shrink: inherit;
        order: inherit;
    }

</style>