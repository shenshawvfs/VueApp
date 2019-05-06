<template>

    <div class="home">
        <div>Welcome to Your {{ vm.name }}</div>
    </div>

</template>
<script>

// if Header is defined, use it else define it.
export default {
    data() { 
        return {
            vm: {
                name: 'Home'
            }
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
