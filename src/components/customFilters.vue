<template>
  <div>
    <h1>Filter</h1>
    <h2>Custom filter:</h2>
    <p>capitalize: {{ "example about local filter" | capitalize }}</p>
    <p>proper: {{ text | proper }} </p>
    <h2>Moment filter:</h2>   
      <p>Now: {{ new Date() | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}</p>
      <p>Birthday: {{ item | moment('MM/DD/YYYY') }}</p>
      <p>Age: {{ item | moment("from", "now", true) }}</p>
  </div>
</template>

<script>
export default {
  name: "customFilters",
  data() {
    return {
      text: "example about globally filter",
      item: 1481889223,
    }
     
  },
  methods: {
   
    
  },
  filters: {
    /** UPPERCASE first letter */
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },   
    
  },
};
</script>

<style  scope>

</style>