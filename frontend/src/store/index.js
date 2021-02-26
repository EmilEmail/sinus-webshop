import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getData from '@/api/api.js';
import { checkLogin, registerUser } from '@/api/api.js';

const BASE_URL = 'http://localhost:5000/api/';
const LOGIN_URL = `${BASE_URL}auth/`;
const REGISTER_URL = `${BASE_URL}register/`;

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
      const token = await checkLogin(LOGIN_URL, user);
      console.log(token);
      console.log(context);
    },
    async registerUser(context, newUser) {
      const response = await registerUser(REGISTER_URL, newUser);
      console.log('registred user response: ' + response);

      //tILLFÄLLIG
      console.log(context);
    }
  },
  modules: {
  }
})
