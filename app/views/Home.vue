<template>

    <div class="home">
        <div>Welcome to Your {{ name }}</div>
    </div>

</template>
<script>

// if Header is defined, use it else define it.
module.exports = {

    data() { 
        return {
            name: 'Home'
        }
    },
    filters: {},
    methods: {},
    props:   [],
    watches: {}
}


</script>
<style>

/* Local styles for this template */

</style>
