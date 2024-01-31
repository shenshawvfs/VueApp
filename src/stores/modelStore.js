/*
Pinia Data Store.
Copyright (c) 2023. Scott Henshaw, Kibble Game Studios Inc. All Rights Reserved.
*/
import { defineStore } from 'pinia'

//const baseURL = `${LOCATION.PROTOCOL}//${LOCATION.HOSTNAME}:${LOCATION.PORT}`;
//const Remote = Axios.create( { baseURL: baseURL });

// import User from '@/model/user' // import POJS model objects

export const useModelStore = defineStore('modelStore', {
    // PRIVATE: model state of the application, a bunch of POJS objects
    state: () => ({
        actionData: {
            info: "Hi there"
        },
    }),

    // PUBLIC: injected into components
    // called to retrieve state data from the store
    getters: {
        theInfo: state => state.actionData.info,
    },

    // PUBLIC: injected into components
    // called to do things to the state via ajax and mutations
    actions: {

        doAction( params ) {
            // return promises here if required,
            // this is also where to use AJAX to call a server
            /*
            return new Promise(( resolve, reject ) => {

                Axios.post('/api/model/action', params )
                    .then( response => response.data )
                    .then( data => (data.error ? error => { throw( error ) }: data.payload ))
                    .then( content => {
                        this.actionData.info = content.info;
                        resolve( content.status );
                    })
                    .catch( error => {
                        console.log('Seems that role has already been taken.')
                        reject();
                    })
            })
            */
        }
    }
})
