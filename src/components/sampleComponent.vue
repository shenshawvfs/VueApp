<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section class="component-style border">  <!-- Just one main element per template -->
        <h3>{{ title }}</h3>
        <div>
            <div v-if="visible">
                This starts visible, but push the button below
                <slot><!-- user innerHTML here--></slot>
            </div>
            <div v-else>
                This is now visible because you pushed the button
                <ul>
                    <li v-for="(item,i) in itemList" :key="i">{{ item.name }}</li>
                </ul>
                <button @click="addItem( empty )">Add Empty Item</button>
            </div>
        </div>
        <button @click="doIt( $event )">Do it!</button>
    </section>

</template>
<script setup>
    import { ref, reactive } from 'vue'
    import { useSampleStore } from '@/stores/sampleStore.js'

    const data = useSampleStore();
    const props = defineProps({ title: String });
    const visible = ref( true );

    const itemList = ref( data.itemList );
    const empty = { name: "Empty thing", value: 100 };

    function doIt( event ) {
        // Yes the same old event object from before
        visible.value = !visible.value
    }

    function addItem( item ) {
        data.addItem( item );
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

    .border {
        border: 1px solid black;
    }

</style>