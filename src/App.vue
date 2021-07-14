<template>
  <div id="app">
    <!-- <Nav /> -->

    <router-link class="link" :to="{ name: 'Nav' }"
      ><button class="home">Home</button></router-link
    >

    <hr />
    <router-view />
    <Loading />
  </div>
</template>

<script>
import Loading from "./components/Loading.vue";
// import Nav from './components/Nav.vue'
const axios = require("axios");
import store from "./store/index";

export default {
  name: "App",
  components: {
    Loading,
    // Nav,
  },
  created() {
    axios.interceptors.request.use(
      function (config) {
        if (config.showLoader) {
          store.dispatch("loader/pending");
          // store.commit('LOADER',true);
        }
        return config;
      },
      function (error) {
        if (error.config.showLoader) {
          store.dispatch('loader/done');
          // store.commit("LOADER", false);
        }
        return Promise.reject(error);
      }
    );
    axios.interceptors.response.use(
      function (response) {
        if (response.config.showLoader) {
          store.dispatch("loader/done");
          // store.commit('LOADER',false)
        }

        return response;
      },
      function (error) {
        if (response.config.showLoader) {
          store.dispatch("loader/done");
          // store.commit('LOADER',false)
        }
        return Promise.reject(error);
      }
    );
  },
};
</script>

<style>
html {
  font-size: 62.5%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.2rem;
}
.home {
  padding: 1rem 2rem;
  margin: 1rem;
  background-color: rgba(128, 128, 128, 0.2);
  color: #000;
}
.link {
  color: #000;
}
</style>
