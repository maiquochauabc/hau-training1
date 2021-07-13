<template>
  <div>
    <!-- <div class="spinner-backgroud" v-if="$store.state.loader.loading" > -->
    <!-- <div class="spinner-backgroud"> -->
    <div class="spinner-backgroud" v-if="loading">
      <div class="spinner">
        <spinner />
      </div>
    </div>
  </div>
</template>

<script>
import spinner from "./spinner.vue";
import { mapState } from "vuex";
export default {
  name: "Loading",
  components: {
    spinner,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("loader", ["loading"]),
  },
};
</script>
<style scope>
.spinner-backgroud {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 20vh;
  background-color: rgba(153, 153, 153, 0.1);
  border-radius: 0.5rem;
}
.spinner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>