<template>
  <div class="confirm__delete">
    <v-row justify="center">
      <v-card>
        <v-card-title class="text-h5">
          Are you sure to delete this product?
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="closeConfirm()">
            Close
          </v-btn>
          <button class="btn btn-danger" @click="deleteProduct(productId)">
            Delete
          </button>
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    productId: Number,
    isdelete: Boolean,
  },
  methods: {
    deleteProduct(productId) {
      // console.log(productId)
      this.$store.dispatch("product/deleteProduct", productId);
      this.$store.dispatch("product/getProducts");
      this.$emit("closeConfirm", false);
    },
    closeConfirm() {
      this.$emit("closeConfirm", false);
    },
  },
};
</script>

<style scope>
.confirm__delete {
  position: fixed;
  z-index: 4;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>