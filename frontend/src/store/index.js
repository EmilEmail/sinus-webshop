import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getData from '@/api/api.js';
import { getUser, checkLogin, registerUser, setToken, addProductToDB, editProductInDB, deleteProductInDB, orderHistory } from '@/api/api.js';

const BASE_URL = 'http://localhost:5000/api/';
const LOGIN_URL = `${BASE_URL}auth/`;
const REGISTER_URL = `${BASE_URL}register/`;
const USER_URL = `${BASE_URL}me/`;
const EDIT_URL = `${BASE_URL}products/`;
const ORDER_URL = `${BASE_URL}orders/`;

const defaultUser = {
  email: "",
  name: "",
  role: "",
  address: {
    street: "",
    zip: "",
    city: ""
  }
}

export default new Vuex.Store({
  state: {
    products: [],
    categories: {
      skateboards: [],
      clothes: [],
      wheels: []
    },
    searchResults: [],
    user: defaultUser,
    cart: [],
    isAdmin: false,
    cartAmount: 0
  },
  getters: {
    products: state => {
      return state.products;
    },
    skateboards: (state) => {
      return state.products.filter(pro => pro.category == "board");
    },
    clothes: (state) => {
      return state.products.filter(pro => pro.category == "clothes");
    },
    wheels: (state) => {
      return state.products.filter(pro => pro.category == "wheels");
    },
  },
  mutations: {
    initProducts(state, data) {
      state.products = data;

      state.categories.clothes = data.filter(pro => pro.category === "clothes");
      state.categories.wheels = data.filter(pro => pro.category === "wheels");
      state.categories.skateboards = data.filter(pro => pro.category === "board");
    // addToCart(state, product) {
    //   state.cart.push(product);
    // },
    },
    logOutUser(state) {
      state.user = defaultUser;
    },
    addToCart(state, product) {
      let found = state.cart.find(prod => prod._id == product._id);
      if (found) {
        found.amount ++;
        found.totalPruductPrice = found.amount * found.price
      } else {
        state.cart.push(product);
        Vue.set(product, 'amount', 1);
        Vue.set(product, 'totalPruductPrice', product.price);
      }
      state.cartAmount++;
    },
    
    doSearch(state, searchText) {
      let allProducts = state.products;
      let searchResults = [];

      for (let i = 0; i < allProducts.length; i++) {
        if (allProducts[i].longDesc.includes(searchText)) {
          searchResults.push(allProducts[i]);
        }
      }
      state.searchResults = searchResults;
      console.log(state.searchResults);
    },
    removeFromCart(state, product) {
      let index = state.cart.indexOf(product);
      if(index > -1) {
        let product = state.cart[index]
        state.cartAmount -= product.amount
        state.cart.splice(index, 1)
      }
    }, 
  },
  actions: {
    async getProducts({ commit }) {
      let products;  
      products = await getData();
      commit('initProducts', products);    
    },

    //LOGIN
    async checkLogin(context, userLogin) {
      const userCheck = await checkLogin(LOGIN_URL, userLogin);
      const token = userCheck.data.token;

      if (userCheck.status === 200) {
        alert("LOGGAT IN");
        setToken(token);
        const userDB = await getUser(USER_URL);
        console.log(userDB);
        context.state.user = userDB;
        if (userDB.role === 'admin') {
          context.state.isAdmin = true;
        }
      }
    },
    async registerUser(context, newUser) {
      const response = await registerUser(REGISTER_URL, newUser);
      if (response.status === 200) {
        alert("Du är registrerad!");
      }
      else {
        alert("Något gick fel... :(");
      }
      //tILLFÄLLIG
      console.log(context);
    },
    async orderHistory() {
      const response = await orderHistory(ORDER_URL);
      console.log(response);
    },

    //PRODUCT
    async addProductToDB(context,newProduct) {
      const response = await addProductToDB(newProduct);
      console.log(response);
      context.dispatch('getProducts');
    },
    async editProductInDB(context,newProduct) {
      let url = EDIT_URL + newProduct._id;

      //To make a product update without ID
      let productPatch = {};
      productPatch.title = newProduct.title;
      productPatch.price = newProduct.price;
      productPatch.shortDesc = newProduct.shortDesc;
      productPatch.category = newProduct.category;
      productPatch.longDesc = newProduct.longDesc;
      productPatch.imgFile = newProduct.imgFile;

      const response = await editProductInDB(url, productPatch);
      console.log(response);
      context.dispatch('getProducts');
    },
    async deleteProductInDB(context, id) {
        let url = EDIT_URL + id;
        const response = await deleteProductInDB(url);
        console.log(response);
        //TILLFÄLLIG
        context.dispatch('getProducts');
    }
    
  },
  modules: {
  }
})
