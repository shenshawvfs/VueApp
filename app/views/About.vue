<template>
    <div class="about">
        <div>{{ name }} your Vue.js App</div>
    </div>
</template>

<script>
// if Header is defined, use it else define it.
module.exports = { 
    data() { 
        return { 
            name: 'About',
        }
    },
    props: {
        // add tag attributes here
    },
    methods: {
        // add methods that are called directly from the template here
    }
}
</script>

<style>
/* Local styles for this template */
</style>
