import axios from 'axios';
import store from "../store";

export const HTTP = axios.create({
  baseURL: `https://fakestoreapi.com/`,
  // baseURL: `https://60ed42bea78dc700178adda3.mockapi.io/api/`,
  headers: {
    Authorization: 'Bearer {token}'
  }
})
HTTP.defaults.showLoader = true;
HTTP.interceptors.request.use(
  function (config) {
    if (config.showLoader) {    
      store.dispatch("loader/pending");
      
    }
    return config;
  },
  function (error) {
    if (error.config.showLoader) {
      store.dispatch('loader/done');   
    }
    return Promise.reject(error);
  }
);
HTTP.interceptors.response.use(
  function (response) {
    if (response.config.showLoader) {
      store.dispatch("loader/done");    
    }

    return response;
  },
  function (error) {
    if (response.config.showLoader) {
      store.dispatch("loader/done");
    }
    return Promise.reject(error);
  }
);