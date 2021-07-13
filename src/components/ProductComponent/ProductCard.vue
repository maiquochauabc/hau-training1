<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      height="200"
      contain
      :src="product.image"
      :lazy-src="product.image"
      alt=""
    />
    <v-card-title>
      <h2 class="text-h5 product__title">{{ product.title }}</h2>
      <v-spacer></v-spacer>
      <span class="text-h6">$ {{ product.price }} </span>
    </v-card-title>

    <v-card-text class="product__desc">
      {{ product.description }}
    </v-card-text>

    <!-- <v-divider class="mx-4"></v-divider>   -->

    <v-card-actions>
      <v-btn block class="white--text" color="deep-purple accent-4" @click="addtocart()">
        Add to Cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    product: "",
  },
  methods: {
    addtocart() {
      this.$store.dispatch("cart/addtoCart", {
        product: this.product,
        quality: 1
      });
    }
  }
};
</script>

<style scope>
.product__title {
  width: 75%;
  line-height: 2;
  /* white-space: pre-wrap; */
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}
.product__desc {
  width: 100%;
  white-space: pre-wrap;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}
</style>