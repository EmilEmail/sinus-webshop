import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { setToken, placeNewOrder } from '@/api/api.js';

import { PRODUCTS_URL, LOGIN_URL, REGISTER_URL, USER_URL, EDIT_URL, ORDER_URL } from '@/api/api.js'
import { get, post, patch, remove } from '@/api/api.js'

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
    orderHistory: [],
    cart: [],
    isAdmin: false,
    cartAmount: 0,
    showSkateboards: true,
    showClothes: true,
    showWheels: true,
    showOnlySearchResults: false,
    searchPage: 1,
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
    orderDate: (state) => {
      let orders = state.orderHistory;
      orders.forEach(order => {
        let date = new Date(order.timeStamp);
        order.timeStamp = date.getDate() + "/" + (1 + date.getMonth()) + "-" + date.getFullYear().toString().substring(2, 4); 
      });
      return orders;
    }
  },
  mutations: {
    initProducts(state, data) {
      state.products = data;
      state.categories.clothes = data.filter(pro => pro.category === "clothes");
      state.categories.wheels = data.filter(pro => pro.category === "wheels");
      state.categories.skateboards = data.filter(pro => pro.category === "board");
    },
    showSkateboards(state) {
      state.showSkateboards = true;
      state.showClothes = false;
      state.showWheels = false;
    },
    showClothes(state) {
      state.showSkateboards = false;
      state.showClothes = true;
      state.showWheels = false;
    },
    showWheels(state) {
      state.showSkateboards = false;
      state.showClothes = false;
      state.showWheels = true;
    },
    showAll(state) {
      state.showSkateboards = true;
      state.showClothes = true;
      state.showWheels = true;
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
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    
    doSearch(state, searchObj) {
      let allProducts = state.products;
      let skateboards = state.categories.skateboards;
      let clothes = state.categories.clothes;
      let wheels = state.categories.wheels;
      let productsToSearch = [];
      let searchResults = [];

      if (searchObj.skateboards === false &&
      searchObj.clothes === false &&
      searchObj.wheels === false) {
        productsToSearch = allProducts;
      }
      else {
        if (searchObj.skateboards === true) {
          skateboards.forEach(product => {
            productsToSearch.push(product);
          });  
        }
        if (searchObj.clothes === true) {
          clothes.forEach(product => {
            productsToSearch.push(product);
          });  
        }
        if (searchObj.wheels === true) {
          wheels.forEach(product => {
            productsToSearch.push(product);
          });  
        }
      }

      for (let i = 0; i < productsToSearch.length; i++) {
        if (productsToSearch[i].longDesc.includes(searchObj.searchText)) {
          searchResults.push(productsToSearch[i]);
        }
      }
      if (searchResults.length !== 0) {
        state.searchResults = searchResults;
        state.showOnlySearchResults = true;
      } else {
        state.showOnlySearchResults = false;
        alert('Inga resultat.');
      }
    },
    removeAmountCart(state, index) {
      if(state.cart[index].amount > 1) {
        state.cart[index].amount--
        state.cart[index].totalPruductPrice = state.cart[index].amount * state.cart[index].price
      } else {
        state.cart.splice(index, 1)
      }
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
      products = await get(PRODUCTS_URL);
      commit('initProducts', products);    
    },

    //LOGIN
    checkLocalstorage(context) {
      if (localStorage.getItem('token') !== null) {
        setToken(localStorage.getItem('token'));
        let user = localStorage.getItem('user');
        context.state.user = JSON.parse(user);
        if (user.role === 'admin') {
          context.state.isAdmin = true;
        }
      }
    },
    clearLocalstorage() {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
    async checkLogin(context, userLogin) {        
      const userCheck = await post(LOGIN_URL, userLogin);
      const token = userCheck.data.token;

      if (userCheck.status === 200) {
        alert("LOGGAT IN");
        setToken(token);
        const userDB = await get(USER_URL);
        context.state.user = userDB;

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userDB));

        if (userDB.role === 'admin') {
          context.state.isAdmin = true;
        }
      }
    },
    async registerUser(context, newUser) {
      const response = await post(REGISTER_URL, newUser);
      if (response.status === 200) {
        alert("Du är registrerad!");
      }
      else {
        alert("Något gick fel... :(");
      }
      //A must...
      console.log(context);
    },
    async orderHistory(context) {
      const response = await get(ORDER_URL);
      context.state.orderHistory = response;
    },
    async commitToBuy(context) {
      let items = context.state.cart;
      const response = await placeNewOrder(ORDER_URL, {items: items.map(item => item._id)});
      
      if(response.status !== 200) {
        alert('Något gick fel...');
      }
    },

    //PRODUCT
    async addProductToDB(context,newProduct) {
      const response = await post(PRODUCTS_URL, newProduct);
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

      const response = await patch(url, productPatch);
      console.log(response);
      context.dispatch('getProducts');
    },
    async deleteProductInDB(context, id) {
        let url = EDIT_URL + id;
        const response = await remove(url);
        console.log(response);
        //A must...
        context.dispatch('getProducts');
    }
  },
  modules: {
  }
})
