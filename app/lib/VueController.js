/*
VUE Base Controller
Copyright (c) 2019. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
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