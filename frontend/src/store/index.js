import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getData from '@/api/api.js';
import { checkLogin } from '@/api/api.js';

export default new Vuex.Store({
  state: {
    products: null,
  },
  mutations: {
    initProducts(state, data) {
      state.products = data;
    }

  },
  actions: {
    async getProducts({ commit }) {
      const data = await getData();
      commit('initProducts', data);
    },
    async checkLogin(context, user) {
      const token = await checkLogin(user);
      console.log(token);
      console.log(context);
    }
  },
  modules: {
  }
})
