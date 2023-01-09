<!--
<VFSHeader />
Copyright (c) 2022-2023. Kibble Game Studios Inc. All Rights Reserved.
-->
<script>
    import Controller from '@/plugins/controller'

    import { useInfoStore } from '@/stores/infoStore.js'

    class HeaderController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                subtitle: "VFS Programming for Games",
            }
            this.props = {
                title: String
            }

            this.injectStore( useInfoStore );
        }
    }

    export default new HeaderController('VFSHeader');

</script>
<template>

    <section class="container left">
        <img alt="VFS Logo" class="logo" src="@/assets/vfs_logo.png" width="125" height="125" @click="$router.push('/')"/>
        <div class="title item">
            <h1>{{ infoStore.name }}</h1>
            <h4>{{ subtitle }} {{ infoStore.version }}</h4>
            <button @click="infoStore.increment()">Add Version</button>
        </div>
        <slot class="item"></slot>
    </section>

</template>
<style scoped>
    .title h1, .title h4 {
        float:right;
        margin-right: 2vw;
        text-align:right;
        width: 100%;
    }

    .logo {
        display: block;
        margin: 0 auto 2rem;
    }

    @media (min-width: 1024px) {
        .logo {
            margin: 0 2rem 0 0;
        }
    }
</style>