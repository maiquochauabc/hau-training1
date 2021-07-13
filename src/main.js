// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import customFilters from './customFilters'
import Vuelidate from 'vuelidate'
// import 'bootstrap/dist/css/bootstrap.min.css'
import VeeValidate from 'vee-validate';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import store from  './store/index' // vuex store instance




Vue.config.productionTip = false
Vue.use(require('vue-moment'));
Vue.use(Vuelidate);
Vue.use(VeeValidate);
Vue.use(Vuetify)
const axios = require("axios");
axios.defaults.showLoader = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  router,
  store,
  customFilters,
  components: { App },
  template: '<App/>'
})
