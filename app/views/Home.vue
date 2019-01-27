<template>
    <div class="home">
        <div>Welcome to Your {{ name }}</div>
    </div>
</template>

<script>
// if Header is defined, use it else define it.

class HomeController {

    constructor( componentName = 'aComponent') {
        this.vm = {
            name: 'Home'
        }
        this.name = componentName;
    }
    get props()   { return {} }
    get methods() { return this.prototype }
    data()        { return this.vm }
}

module.exports = new HomeController('pgHome');
</script>

<style>
/* Local styles for this template */
</style>
