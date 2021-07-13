<template>
  <v-item-group multiple>
    <Cart />
    <v-container>
      <v-row>
        <v-col v-for="product in products" :key="product.id" cols="12" md="4">
          <v-lazy> <ProductCard :product="product" /></v-lazy>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
import ProductCard from "./ProductCard.vue"
import Cart from "./Cart.vue";
export default {
  components: { ProductCard, Cart },

  computed: {
    products() {
    //   console.log(this.$store.state.product.products);
      return this.$store.state.product.products;
    },
  },
  mounted() {
    this.$store.dispatch("product/getProducts");
  },
};
</script>

<style scope>
</style>