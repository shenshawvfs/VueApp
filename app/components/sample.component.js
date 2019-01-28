/*
VUE App's Component.
Copyright (c) 2019. Scott Henshaw, Kibble Online Inc. All Rights Reserved.

<sample-component widget="Sample" enum="SURFACE" available="true" v-bind:author="{ a: someObject }">
    <!-- Injected sample HTML code here -->
    <div id="sample-inner"></div>
</sample-component>

*/
'use strict';

class VUEController {

    set style( css = "") {
        
        let theStyles = document.createTextNode( css );
        let componentCSS = document.createElement('style');
        componentCSS.appendChild( theStyles );
        
        document.head.appendChild( componentCSS );
    }
}

class SampleController extends VUEController {

    constructor() {
        super();

        // internal stuff, not the template variables or properties
        this.style = `
            .sample-bar input {
                color: green;
            }`;
    }

    // Add template methods here...
    //--------------------------------------------------------
    doSomething() {
        // trigger this inside the template...
    }
}

class ComponentDefinition {

    constructor( name = "componentDefinition") {
        this.name = "";
        this.vm = {};
        this.props = {};
        this.methods = {};
        this.template = "";
    }

    model( dataObj  ) {
        Object.apply( this.vm, dataObj );
        return this
    }

    attributes( properties ) { 
        Object.apply( this.props, properties );
        return this
    }
    
    controller( proto ) {
        Object.apply( this.methods, proto );
        return this
    }

    markup( template ) {
        this.template = template;
        return this
    }

    data() {
        return this.vm;
    }
}


let defn = new ComponentDefinition('sampleComponent')
    .model({ 
        name: "Scott" 
    })
    .attributes({
        widget:    String,
        enum:      Number,
        available: Boolean,
        author:    Object
    })
    .controller( new SampleController() )
    .markup(`
    <label class="sample-bar">
        {{ name }}
        <input v-bind:value="widget" v-on:input="$emit('input', $event.target.value )">
        <slot></slot>
    </label>`);


export default Vue.component('sample-component', {
        name: 'sample-component',
        props: {
            widget:    String,
            enum:      Number,
            available: Boolean,
            author:    Object
        },
        methods: new SampleController(),    
        template: `
            <label class="sample-bar">
                {{ name }}
                <input v-bind:value="widget" v-on:input="$emit('input', $event.target.value )">
                <slot></slot>
            </label>`,
        data: () => { 
            return { 
                name: "Scott" 
            } 
        },  
    });
