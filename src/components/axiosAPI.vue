<template>
  <div>
    <li v-for="item in data" v-bind:key="item.id">
      {{ item.id + ": " + item.name + " - username: " + item.username}}
    </li>
    <button class="btn btn-primary" v-on:click="getName()">get (axiosAPI)</button>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "axiosAPI",
  data() {
    return {
      data: [],
      id: 1,
    };
  },
  methods: {
    async getName() {
      axios
        .get("https://jsonplaceholder.typicode.com/users/", {
          params: {
            id: this.id++,
          },
        })
        .then((response) => {
          this.data.push(...response.data);
        })
        .catch((error) => {});
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