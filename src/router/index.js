import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/Nav'
import customFilters from '@/components/customFilters'
import Category from '@/components/Category'
import ChildCategory from '@/components/ChildCategory'
import axiosAPI from '@/components/axiosAPI'
import reusableComponents from '@/components/reusableComponents'
import TwoWayBinding from '@/components/TwoWayBinding'
import customDirective from '@/components/customDirective'
import FormProcessing from '@/components/FormProcessing'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/custom-filters',
      name: 'customFilters',
      component: customFilters
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/category/:id',
      name: 'ChildCategory',
      component: ChildCategory      
    },
    {
      path: '/axios-api',
      name: 'axiosAPI',
      component: axiosAPI      
    },
    {
      path: '/reusable-components',
      name: 'reusableComponents',
      component: reusableComponents      
    },
    {
      path: '/two-way-binding',
      name: 'TwoWayBinding',
      component: TwoWayBinding      
    },
    {
      path: '/custom-directive',
      name: 'customDirective',
      component: customDirective      
    },
    {
      path: '/form-processing',
      name: 'FormProcessing',
      component: FormProcessing      
    },
  ],
  mode: 'history'
})
