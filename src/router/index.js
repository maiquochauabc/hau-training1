import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/Nav'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
