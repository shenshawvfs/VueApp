<!--
<pg-sidebar />

@copyright: (c) 2022. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<script>
    import Controller from '@/plugins/controller'

    import pgNavbar from '@/components/Navbar.vue'

    class SidebarController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                title:       "My Sidebar",
                description: "Application Name"
            }
        }
    }

    export default new SidebarController('pgSidebar', { pgNavbar });

</script>
<template>

    <aside>
        <div class="flexbox sidebar">
            <div class="flexitem side-item">
                <h2>{{ title }}</h2>
                <h4>{{ description }}</h4>
            </div>
            <pg-navbar></pg-navbar>
            <slot></slot>
        </div>
    </aside>

</template>
<style scoped>
    /* sidebar */
    .sidebar {
        flex-direction: column;
        background: #4c4c4c;
        box-shadow: inset -1px 0 2px 1px #222;
    }
        .side-item {
            margin-top: 2em;
            padding: 1em;
        }
</style>