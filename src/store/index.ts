import axios from "axios";
import Vue from "vue";
import Vuex, { Store } from "vuex";

import type { User } from "@/models/User";
import { formatUserFields } from "@/utils/format";

Vue.use(Vuex);

export const store = new Store({
  state: {
    users: [],
    usersFavorites: [],
  },
  mutations: {
    setUsers(state, users: User[]) {
      state.users = users;
    },
    setUserFavorite(state, users: User[]) {
      state.users = users;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      const response = await axios.get("https://reqres.in/api/users");
      const users = formatUserFields(response.data.data);
      commit("setUsers", users);
    },
    setUserFavorite({ commit, state }, payload: User) {
      const users = [...state.users];
      const user = users.find((user) => user.id === payload.id);
      if (user) {
        user.favorite = !user.favorite;
        commit("setUserFavorite", users);
      }
    },
  },
  getters: {
    countUsers(state) {
      return state.users.length;
    },
    countFavorites(state) {
      return state.usersFavorites.length;
    },
  },
});
