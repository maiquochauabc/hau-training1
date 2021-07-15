import { HTTP } from "../../httpcommon/http-common";
import axios from "axios";
// const baseURL = "https://fakestoreapi.com/products/";

export const product = {
  namespaced: true,
  state: {
    products: [],
    product: null,
    updatealert: false,
    updatesuccess: true
  },
  actions: {
    getProducts({ commit }) {
      HTTP.get(`products`)
        // axios.get(baseURL)
        .then(response => {
          commit("SET_PRODUCTS", response.data);
          // console.log(response.data);
        });
    },
    getProduct({ commit }, {productId}) {
      // console.log(productId)
      HTTP.get(`products/${productId}`).then(response => {
        commit("SET_PRODUCT", response.data);
        //  console.log(response.data);
      }).catch(error => {
       
      });
    },
    createNewProduct({ commit }, product) {
      HTTP.post(`products`, product)
        .then(response => {
          commit("SUCCESS_UPDATE", true);
        })
        .catch(error => {
          commit("SUCCESS_UPDATE", false);
        });
      commit("TOGGLE_ALERT");
      setTimeout(() => {
        commit("TOGGLE_ALERT");
      }, 5000);
    },
    deleteProduct({ commit }, productId) {
      // console.log(productId)
      HTTP.delete(`products/${productId}`)
        .then(response => {
          commit("SUCCESS_UPDATE", true);
          // commit("DELETE_PRODUCT", productId);
          //  console.log(response.data);
        })
        .catch(error => {
          commit("SUCCESS_UPDATE", false);
        });
      commit("TOGGLE_ALERT");
      setTimeout(() => {
        commit("TOGGLE_ALERT");
      }, 5000);
    },
    updateProduct({ commit },  product ) {
      // console.log(productId)
      HTTP.patch(`products/${product.id}`, {
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image,
      })
        .then(response => {
          commit("SUCCESS_UPDATE", true);
          // commit("DELETE_PRODUCT", productId);
          //  console.log(response.data);
        })
        .catch(error => {
          commit("SUCCESS_UPDATE", false);
        });
      commit("TOGGLE_ALERT");
      setTimeout(() => {
        commit("TOGGLE_ALERT");
      }, 5000);
    }
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PRODUCT(state, product) {
      state.product = product;
    },
    TOGGLE_ALERT(state) {
      state.updatealert = !state.updatealert;
    },
    SUCCESS_UPDATE(state, issuccess) {
      state.updatesuccess = issuccess;
    },
    DELETE_PRODUCT(state, productId) {
      state.cart = state.cart.filter(item => {
        return item.product.id != productId;
      });
      saveState(state.cart);
      // console.log(state.cart.length)
    }
  }
};
