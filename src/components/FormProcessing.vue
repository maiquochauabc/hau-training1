<template>
  <div>
    <H1>Form processing</H1>
    <h2>1. Vuelidate</h2>
    <p>
      username and email validate unique with data in
      <a target="_blank" href="https://jsonplaceholder.typicode.com/users"
        >https://jsonplaceholder.typicode.com/users</a
      >
    </p>
    <Formvuelidate />

    <FormVeevalidate />

    <FormVuetify />
  </div>
</template>

<script>
import Formvuelidate from "./Formvuelidate.vue";
import FormVeevalidate from './FormVeevalidate.vue'
import FormVuetify from "./FormVuetify.vue";

export default {
  name: "FormProcessing",
  components: {
    Formvuelidate,
    FormVeevalidate,
    FormVuetify,
  },
  data() {
    return {};
  },
};
</script>

<style scope>
h1,
h2,
p {
  text-align: center;
}
</style>