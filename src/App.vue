<template>
  <div id="app">  
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html {
  font-size: 62.5%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
  nav {
    background-color: rgba(128, 128, 128, 0.2);
    padding: 2rem;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
  nav .menu__list{
    list-style: none;
  }
  nav .menu__list .menu__item{    
    padding: 1rem;
  }
   nav .menu__list .menu__item .menu__link{
     text-decoration: none;
     font-size: 1.8rem;
   }
</style>
