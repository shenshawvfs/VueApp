/*
Pinia Data Store.
Copyright (c) 2023. Scott Henshaw, Kibble Game Studios Inc. All Rights Reserved.
*/
import { defineStore } from 'pinia'


// Store with local definitions
export const useModelStore = defineStore('modelStore',{

    state: () => ({
        itemList: [],
        filter:   'all',
        current:  0
    }),
    getters: {
        getList( state ) {
            return state.itemList;
        }
    },
    actions: {
        addItem( anItem ) {
            this.itemList.push( anItem )
        }
    }
})
