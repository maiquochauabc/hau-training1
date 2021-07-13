<template>
  <nav>
      <ul class="menu__list">
        <li class="menu__item">
        <router-link class="menu__link" :to="{ name: 'Nav' }">Home</router-link>
        </li>
        <li class="menu__item">
        <router-link  class="menu__link" to="/category">Category (Nested router/view)</router-link>
        </li>           
        <li class="menu__item">
        <router-link  class="menu__link" :to="{ name: 'customFilters' }"> Filter </router-link>
        </li>
        <li class="menu__item">
        <router-link  class="menu__link" :to="{ name: 'axiosAPI' }"> axios API </router-link>
        </li>
        <li class="menu__item">
        <router-link  class="menu__link" :to="{ name: 'reusableComponents' }">  {{ 'reusable custom components' | proper }} </router-link>
        <!-- Example About Globally Filter -->
        </li>
        <li class="menu__item">
        <router-link  class="menu__link" :to="{ name: 'TwoWayBinding' }">Two Way Binding </router-link>
        </li>
        <li class="menu__item">
        <router-link  class="menu__link" :to="{ name: 'customDirective' }">Directive (v-autofocus)</router-link>
        </li>
        <li class="menu__item">
        <router-link  class="menu__link" :to="{ name: 'FormProcessing' }">Form Processing </router-link>
        </li>
        <li class="menu__item">
        <router-link  class="menu__link" :to="{ name: 'LoadingCallAPI' }">Loading when wait to call API</router-link>
        </li>
        <li class="menu__item">
        <router-link  class="menu__link" :to="{ name: 'ProductList' }">Product List (store module VueX)</router-link>
        </li>

      </ul>
    </nav>
</template>

<script>
export default {
    name: 'Nav',
    data() {
        return {
                     
        }
    },

    filters: {
 
   
}
}
</script>

<style>

nav {
    background-color: rgba(128, 128, 128, 0.2);
    padding: 2rem;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  nav .menu__list{
    list-style: none;
    padding-right: 4rem;
  }
  nav .menu__list .menu__item{    
    padding: 1rem;
    border-bottom: 1px solid currentColor;
  }
   nav .menu__list .menu__item .menu__link{
     text-decoration: none;
     font-size: 1.6rem;
     color: black;
   }

</style>