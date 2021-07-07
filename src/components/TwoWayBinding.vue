<template>
  <div>
      <h1>Two way binding custom component</h1>
       <h2>Use v-bind and v-on input and Component</h2>
    <customInput :text="str1" @input="str1 = $event"/>   
    <p>Result in parent component: {{ str1 }}  </p>   

     <h2>Use v-model in component </h2>
     <customInput :text="str2" v-model="str2"/>   
     <p>Result in parent component: {{ str2 }}  </p>
    

  </div>
</template>

<script>
import customInput from './customInput'
export default {
    name: 'TwoWayBinding',
    components:{
        customInput,
    },
    data() {
        return {
            str1: 'text',   
            str2: 'text2'        
        }
    },
    methods: {
        
    },
}
</script>

<style scope>
   

</style>