<template>
  <div>
      
    <input type="text" class="form-control" :value="text" @input="$emit('input', $event.target.value)" />
    <p>Result in child Component: {{ text }}  </p>
    
    
  </div>
</template>

<script>
export default {
    name: 'customInput',
    props: {
    text: {
      type: String,
      default: '',
    },
   
    
  },
}
</script>

<style scoped>

input {
  width: 80%;
  max-width: 50rem;
}
</style>>