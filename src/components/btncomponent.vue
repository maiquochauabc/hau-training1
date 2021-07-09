<template>
  <button class="btn btn-primary" v-on:click="count++">You clicked me {{ count }} times</button>
</template>

<script>

export default {
    name: "btncomponent",
data: function () {
    return {
      count: 0
    }
  },
}
</script>

<style>

</style>