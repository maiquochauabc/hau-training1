<template>
  <p>
        Child Category with ID is: {{ $route.params.id }}
</p>
</template>

<script>
export default {
name: 'Childategory',
}
</script>

<style scope>
p {
  font-size: 2rem;
}

</style>