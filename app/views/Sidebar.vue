<template>
    <aside id="sidebar-wrapper" class="grid-side area vue-component">
        <div id="sidebar-container" class="sidebar flexbox">
            <div class="side-item">
                <h2>{{ title }}</h2>
                <h4>{{ description }}</h4>
            </div>
            <pg-navbar></pg-navbar>
            <slot></slot>
        </div>
    </aside>
</template>
<script>
class Controller {
    constructor() {
        this.vm = {
            title:       "My Sidebar",
            description: "Application Name"
        }
    }
}
const ctrl = new Controller();

module.exports = {
    data() {
        return ctrl.vm;
    }
}

</script>
<style></style>