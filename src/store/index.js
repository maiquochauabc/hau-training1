import Vue from "vue";
import Vuex from "vuex";
import { loader } from "./modules/loader";
import { product } from "./modules/product";
import { cart } from "./modules/cart";
import { adminuser } from "./modules/adminuser";

Vue.use(Vuex);


// const store =  new Vuex.Store({
export default new Vuex.Store({
  modules: {
    loader,
    product,
    cart,
    adminuser,
  },
  state: {
    loading: false
  },
  mutations: {
    // LOADER(state, payload) {
    //   state.loading = payload;
    // }
  }
});
