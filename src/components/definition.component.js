class ComponentDefinition {

    constructor( name = "componentDefinition") {
        this.name = name;
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
