import { createStore } from "vuex";
import axios from "axios";

export const store = createStore ({
    state() {
        return { 
            contacts: []
        }
    },
    getters: {},
    mutations: {
        SET_CONTACTS_TO_STORE(state, contacts) {
            state.contacts = contacts
        }
    },
    actions: {
        FETCH_CONTACTS({commit}) {
            return axios.get('http://localhost:3000/contacts')
            .then((contacts) => {
                commit('SET_CONTACTS_TO_STORE', contacts.data)
            })
        }
    }
})