/*
VUE App's Component.
Copyright (c) 2019. Scott Henshaw, Kibble Online Inc. All Rights Reserved.

<sample-component widget="Sample" enum="SURFACE" available="true" v-bind:author="{ a: someObject }">
    <!-- Injected sample HTML code here -->
    <div id="sample-inner"></div>
</sample-component>

*/
'use strict';

export default class VUEController {

    set style( css = "") {
        
        let theStyles = document.createTextNode( css );
        let componentCSS = document.createElement('style');
        componentCSS.appendChild( theStyles );
        
        document.head.appendChild( componentCSS );
    }

}