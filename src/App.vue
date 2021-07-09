<template>
  <div id="app">  
    <!-- <Nav /> -->
     
        <router-link class="link" :to="{ name: 'Nav' }"><button class="home">Home</button></router-link>
    
    <hr/>
    <router-view/>
    
  </div>
</template>

<script>
// import Nav from './components/Nav.vue'
export default {
  name: 'App',
  components: {
    // Nav,
  }
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
  color: #2c3e50;
  font-size: 1.2rem;
  
}
 .home{
  padding: 1rem 2rem;
  margin: 1rem;
  background-color: rgba(128, 128, 128, 0.2);;
  color: #000;

}
.link{
  color: #000;
}
</style>
