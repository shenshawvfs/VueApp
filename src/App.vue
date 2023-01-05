<!--
<pg-app />

@copyright (c) 2021. Scott Henshaw. All Rights Reserved.
-->
<template>

    <main class="grid-frame app">

        <pg-header class="grid-header" />
        <pg-sidebar class="grid-side" />

        <router-view class="grid-content" />

    </main>

</template>
<style>
    /**
    * CSS Styles for VFS Demo App
    *
    * @Copyright 2014-2022, Vancouver Film School, In cooperation with Kibble Games Inc.
    * @author: Scott Henshaw
    * @Contributor: Clinton Ramonida
    */

    /* DEFAULTS imported from style-base.css */
    body {
        background-color: rgb(194, 193, 193);
        font-family: 'Maven Pro', Helvetica, sans-serif;
        overflow: hidden;
    }

    h1, h3 { text-shadow: #333 2px 2px 3px; }

    label {
        color: white;
        font-weight: 600;
        text-shadow: #333 1px 1px 2px;
    }

    input {
        background-color: white;
        color: black;
        font-family: 'Maven Pro', Helvetica, sans-serif;
        font-size: 17px;
    }

    input[type=button] {
        background-color: black;
        margin: 3px;
        padding: 3px 8px;
        border: 1px solid black;
    }

    input[type=button]:hover {
        background-color: gray;
    }

    input[type=button]:focus {
        background-color: #D10034;
        border: 1px solid black;
    }

    /* GRID FRAME/CONTAINER (PARENT) */
    .grid-frame {
        display: grid;
        grid-template-columns: 1fr 7fr 1fr;
        grid-template-rows: 1fr 6fr 2fr;
        grid-template-areas:
        "header  header  header  header  header  header  header  header  header"
        "sidebar sidebar app     app     app     app     app     app     app"
        "sidebar sidebar footer  footer  footer  footer  footer  footer  footer";
        justify-items: start;
    }

    .grid-header { grid-area: header;}
    .grid-nav { grid-area: navbar; }
    .grid-content { grid-area: app;}
    .grid-side { grid-area: sidebar;}
    .grid-foot { grid-area: footer; }

    /* GRID CONTAINER CHILD (CHILD BUT A CONTAINER) */
    .grid-frame-child {
        display: grid;
        background: #FFFFFF;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(9, 1fr);
        height: 100%;
        width: 100%;
    }

        .grid-intro {
            grid-column: 2/9;
            grid-row: 2/3;
        }

        .grid-filter {
            grid-column: 9/15;
            grid-row: 2/3;
            text-align: end;
        }

        .grid-tile {
            grid-column: 2/15;
            grid-row: 3/15;
        }

    .container { background-color: transparent;}

    /* FLEX CONTAINER (PARENT) */
    .flexbox {
        display: flex;
        background-color: rgb(241, 244, 247);
        height: 100%;
    }
    .flexbox.columns { flex-direction: column; }
    .flexbox.rows { flex-direction: row; }

        /* FLEX ITEMS (CHILDREN) */
        .flexitem{ align-self: center; }
        .flexitem.left { align-self: flex-start; }

    .logo {
        background-image:url("assets/vfs_logo.png");
        background-size:100% 100%;
        height: 6em;
        width: 8em;
        max-width: 8em;
        margin-left: 1em;
        cursor: pointer;
    }

    .title { font-family: 'Raleway', Arial, Helvetica, sans-serif; }

    .search-bar{
        color: white;
        margin-right: 5em;
        margin-top: 5em;
        cursor: pointer;
        visibility: hidden;
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        list-style-type: none;
        overflow: hidden;
    }

    li {
        background: #D10034;
        float: left;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }

    li:hover {
        background-color: #111;
        box-shadow: 0 10px 20px rgba(0,0,0,0.05), 0 5px 5px rgba(0,0,0,0.22);
    }

    li a {
        display: block;
        color: white;
        text-align: start;
        text-decoration: none;
        padding: 0.7em;
    }

    /* content */
    .content {
        flex-direction: row;
        flex-wrap: wrap;
        overflow-x: hidden;
        /* overflow-y: scroll; */
        justify-content: space-evenly;
        background: #FFFFFF;
    }
    .content-intro {
        font-weight:bold;
    }

    /* content form*/
    .edit-form {
        display: grid;
        grid-template-areas: ".form.";
        overflow: hidden;
        width: 65vw;
    }
        .edit-form-child {
            grid-area: form;
            overflow: auto;
        }

    .formitems{ margin: 15px 10px 15px 10px; }

    .description-box { margin: 40px 10px 40px 10px;}

    #review-button {
        width: 95%;
        margin: 10px;
    }

    /* Button Styles */
    .buttons {
        justify-content: center;
        align-items: center;
    }

    .btn {
        background-color: white;
        color: black;
        height: 40px;
        width: 80px;
        margin: 2px;
        border: 2px solid black;
    }

    .btn:hover {
        background-color: #555555;
        color: white;
    }

    /* Heading Styles */
    h1, h2, h3, h4 { color: white; }
    h2 {
        font-family: 'Roboto', Helvetica, sans-serif;
        margin: 3px 0px 3px 0px;
    }

    h3, h4 { font-family: 'Raleway', Helvetica, sans-serif; }

    .app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
<script>
    import "@/assets/style-base.css"

    // typical Vue component controller defined and registered here
    import Controller from '@/plugins/controller.js'

    import pgHeader  from '@/components/Header.vue'
    import pgNavbar from '@/components/Navbar.vue'
    import pgSidebar from '@/components/Sidebar.vue'

    class AppController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                title: 'Creative Tech Projects',
                subtitle: ''
            }
        }
    }

    // export a definition for this view
    export default new AppController('pgApp', { pgHeader, pgSidebar, pgNavbar });

</script>