/*
Pinia Data Store.
Copyright (c) 2023. Scott Henshaw, Kibble Game Studios Inc. All Rights Reserved.
*/
import { ref } from 'vue'
import { defineStore } from 'pinia'


// Store with local definitions
export const useSampleStore = defineStore('sampleStore',{

    state: () => ({
        itemDataList: [
            {name:"Item One", value: 1},
            {name:"Item Two", value: 2},
            {name:"Item Three", value: 3},
        ],
        filter:   'all',
        current:  0
    }),
    getters: {
        itemList: state => state.itemDataList,
        filterTerm: state => state.filter,
    },
    actions: {
        addItem( anItem ) {

            this.itemDataList.push( anItem )
        }
    }
})
