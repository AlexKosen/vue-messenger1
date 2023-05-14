import { createStore } from "vuex";
import axios from "axios";

export const store = createStore({
  state() {
    return {
      isAuth: true,
      contacts: [],
      chats: [],
      currentUserChat: {},
      currentChat: {},
    };
  },
  getters: {},
  mutations: {
    SET_CONTACTS_TO_STORE(state, contacts) {
      state.contacts = contacts;
    },
    SET_CHATS_TO_STORE(state, chats) {
      state.chats = chats;
    },
    SET_USER_TO_HEAD(state, user) {
      if (user) {
        state.currentUserChat = user;
      } else {
        state.currentUserChat = "";
      }
    },
    SET_TO_CURRENT_CHAT(state, chat) {
      state.currentChat = chat;
    },
  },
  actions: {
    FETCH_CONTACTS({ commit }) {
      return axios.get("http://localhost:3000/contacts").then((contacts) => {
        commit("SET_CONTACTS_TO_STORE", contacts.data);
      });
    },
    FETCH_CHATS({ commit }) {
      return axios.get("http://localhost:3000/chats").then((chats) => {
        commit("SET_CHATS_TO_STORE", chats.data);
      });
    },
    SET_USER_TO_HEADER({ commit }, user) {
      commit("SET_USER_TO_HEAD", user);
    },
    ADD_CURRENT_CHAT({ commit }, chat) {
      commit("SET_TO_CURRENT_CHAT", chat);
    },
    SET_MESSAGE_TO_CHAT({ commit }, { userId, chat }) {
      return axios
        .put("http://localhost:3000/chats/" + userId, chat)
        .then((response) => {
          return response;
        });
    },
  },
});
