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
import LoadingCallAPI from '@/components/LoadingCallAPI'
import ProductList from '@/components/ProductComponent/ProductList'
import ProductDetail from '@/components/ProductComponent/ProductDetail'
import CheckOut from '@/components/ProductComponent/CheckOut'
import ProductAdmin from '@/components/ProductAdmin/ProductAdmin'
import LoginAdmin from '@/components/ProductAdmin/LoginAdmin'


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
    {
      path: '/loading-call-api',
      name: 'LoadingCallAPI',
      component: LoadingCallAPI      
    },
    {
      path: '/products',
      name: 'ProductList',
      component: ProductList,
      // children: [
      //   {
      //     path: '/products:id',
      //     name: 'ProductDetail',
      //     component: ProductDetail      
      //   },
      // ]      
    },
    {
      path: '/product/:id',
      name: 'ProductDetail',
      component: ProductDetail,
      props: true,      
    },
    {
      path: '/check-out',
      name: 'CheckOut',
      component: CheckOut,         
    },
    {
      path: '/admin',
      name: 'LoginAdmin',
      beforeEnter: ifNotAuthenticated,
      component: LoginAdmin,         
    },    
    {
      path: '/admin/product-admin',
      name: 'ProductAdmin',
      beforeEnter: ifAuthenticated,         
      component: ProductAdmin,
    },
    {
      path: '/admin/*',
      beforeEnter: (to, from, next) => {
        next('/admin');
      }
    }
    
  ],
  mode: 'history'
});
import store from '../store'

function ifAuthenticated(to, from, next) {
  if (store.state.adminuser.isAuthenticated) {  
    return next();
  }
  return next('/admin');
};

function ifNotAuthenticated (to, from, next){
  if (!store.state.adminuser.isAuthenticated) {
    return next();
  }
  return next('/admin/product-admin');
};
