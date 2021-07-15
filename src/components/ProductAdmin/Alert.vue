<template>
<div class="alert__box" v-if="isalert">
  <div v-if="issuccess">    
     <div class="alert alert-success alert-dismissible">   
    <strong>Success!</strong> This alert box could indicate a successful.
  </div>
  <div v-if="!issuccess">
    <div class="alert alert-danger">
    <strong>Error!</strong> This alert box could indicate a error.
  </div>

  </div>
   
  </div>

</div>
</template>

<script>
export default {
    computed: {
        issuccess(){
            return this.$store.state.product.updatesuccess;
        },
        isalert(){
            return this.$store.state.product.updatealert;
        },
    }

}
</script>

<style scope>
.alert__box{
    position: fixed;
    z-index: 4;
    left: 50%;
    transform: translateX(-50%);

}

</style>