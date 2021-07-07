// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import customFilters from './customFilters'
import Vuelidate from 'vuelidate'
// import 'bootstrap/dist/css/bootstrap.min.css'
import VeeValidate from 'vee-validate';

Vue.config.productionTip = false
Vue.use(require('vue-moment'));
Vue.use(Vuelidate);
Vue.use(VeeValidate);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  customFilters,
  components: { App },
  template: '<App/>'
})
