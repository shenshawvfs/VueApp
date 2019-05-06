<template>

    <header id="header-wrapper" class="grid-header area vue-component">
        <div id="header-container" class="header flexbox">
            <div class="logo flexitem" @click="$ctrl.goHome"></div>
            <slot class="flexitem"></slot>
            <div class="title flexitem">
                <h1>{{ vm.title }}</h1>
                <h3>{{ vm.subtitle }}</h3>
            </div>
        </div>
    </header>

</template>
<script>

export default {
    name: 'pgHeader',
    data() { 
        return {
            vm: {
                title:    "VUE Template Title",
                subtitle: "A Beggining",
            }
        }
    },
    props:   [],
    methods: {
        $ctrl: {
            goHome( event ) {
                console.log("Going home now!");
                location.href = "./index.html";
            }
        }
    },
    filters: {},
    watches: {}
}

</script>
<style>

</style>