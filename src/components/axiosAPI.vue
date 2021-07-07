<template>
  <div>
    <li v-for="item in data" v-bind:key="item.id">
      {{ item.id + ": " + item.title }}
    </li>
    <button v-on:click="getName()">get</button>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "axiosAPI",
  data() {
    return {
      data: {},
    };
  },
  methods: {
    async getName() {
      axios
        .get("http://jsonplaceholder.typicode.com/posts/?userId=1")
        .then((response) => {
          this.data = response.data;
          // console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
    },
    async getData() {
      axios.interceptors.response.use(
        function (response) {
          
          console.log(response.data);
        //   return response;
        },
        function (error) {
          console.log(error);
        //   return Promise.reject(error);
        }
      );
    },
  },
};
</script>

<style scope>
li {
  list-style: none;
  text-align: left;
  font-size: 1.5rem;
}
</style>