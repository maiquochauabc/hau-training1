<template>
  <div>
    <div class="container mb-2">
      <!-- <input type="text" class="form-control col-md-8" />
      <button class="btn btn-success col-md-2" @click="$store.state.loading = !$store.state.loading">
        Click me
      </button> -->
      <!-- <div><loading  v-if="$store.state.loading"  /></div> -->
      <!-- <div><loading  /></div> -->



      <div>
        <li v-for="item in data" v-bind:key="item.id">
          {{ item.id + ": " + item.name + " - username: " + item.username }}
        </li>
        <button class="btn btn-primary col-md-2" v-on:click="getName()">
          get (axios API )
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "./Loading.vue";
const axios = require("axios");
export default {
  components: { Loading },
  name: "LoadingCallAPI",
  data() {
    return {
      isloading: false,
      data: [],
      id: 1,
    };
  },
  methods: {
    async getName() { 
        console.log("aaa")
      await axios
        .get("https://jsonplaceholder.typicode.com/users/", {
            params: {
                id: this.id++,
          },showLoader: true 
        })
        .then((response) => {          
            this.data.push(...response.data);
        })
        .catch((error) => {})

    },
  },
  
};
</script>

<style>
</style>