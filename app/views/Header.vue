<template>

    <header id="header-wrapper" class="grid-header area vue-component">
        <div id="header-container" class="header flexbox">
            <div class="logo flexitem" @click="goHome"></div>
            <slot class="flexitem"></slot>
            <div class="title flexitem">
                <h1>{{ title }}</h1>
                <h3>{{ subtitle }}</h3>
            </div>
        </div>
    </header>

</template>
<script>

module.exports = {
    data() { 
        return {
            title:    "VUE Template Title",
            subtitle: "A Beggining",

        }
    },
    filters: {},
    methods: {
        goHome() {
            console.log("Going home now!");
            location.href = "./index.html";
        }
    },
    name: 'pgHeader',
    props:   [],
    watches: {}
}

</script>
<style>
</style>