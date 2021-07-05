<template>
  <nav>
      <ul class="menu__list">
        <li class="menu__item">
        <router-link class="menu__link" :to="{ name: 'Nav' }">Home</router-link>
        </li>
        <li class="menu__item">
        <router-link  class="menu__link" to="/about">About</router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
    name: 'Nav'
}
</script>

<style>

</style>