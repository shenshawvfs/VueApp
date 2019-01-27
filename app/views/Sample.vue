<template>

    <label class="sample-bar">
        {{ name }}
        <input v-bind:value="widget" v-on:input="$emit('input', $event.target.value )">
        <slot></slot>
    </label>

</template>
<script>
module.exports = {

    data() {
        return { 
            name: "Scott" 
        }
    },

    filters: {},

    methods: {
        doSomething() {
            console.log("Doing work here.");
        }
    },

    props: {
        widget:    String,
        enum:      Number,
        available: Boolean,
        author:    Object
    },
    
    watches: {}

}
</script>
<style>

.sample-bar input {
    color: green;
}

</style>