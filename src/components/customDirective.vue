<template>
  <div>
      <h1>Directive</h1>
      
        <input type="text" class="form-control" v-autofocus>
        <p>Auto focus in input element with directive 'v-autofocus'</p>
  </div>
</template>

<script>
export default {
name: 'customDirective',

directives: {
  autofocus: {    
    inserted: function (el) {
      el.focus()
    }
  }
}

}
</script>

<style>

</style>