<template>
<div>

 <v-card class="mx-auto" max-width="400">
    <router-link  :to="{name: 'ProductDetail', params: {id: product.id}}">
    <v-img
      height="200"
      contain
      :src="product.image"
      :lazy-src="product.image"
      alt=""
    /></router-link>
    <v-card-title>
      <!-- <div  v-if="hover" class="hover__title">{{ product.title }}</div> -->
      <h3 class="text-h4 product__title"><router-link class="link"  :to="{name: 'ProductDetail', params: {id: product.id}}">
     {{ product.title }}
      </router-link></h3>
      <v-spacer></v-spacer>
      <span class="text-h6">${{ product.price }} </span>
    </v-card-title>
    <div class="product__desc">
      {{ product.description }}
    </div>
 

    <!-- <v-divider class="mx-4"></v-divider>   -->

    <v-card-actions>
      <v-btn
        block
        class="white--text"
        color="deep-purple accent-4"
        @click="addtocart()"
      >
        Add to Cart
      </v-btn>
    </v-card-actions>
  </v-card>


</div>

 
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
        quality: 1,
      });
    },
  },
 
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
  cursor: pointer;
}

.hover__title {
  position: absolute;
  bottom: 45%;
  background-color: rgba(255, 255, 255, 0.8);
  /* padding: 0.5rem 1rem; */
  margin-right: 1rem;
  border-radius: 1rem;
  /* display: none; */
  visibility: hidden;
}
.product__title:visited,
.product__title:hover .hover__title {
  display: block;
  visibility: visible;
}
.product__desc {
  /* width: 100%; */
  padding: 0 1rem;
  /* white-space: pre-wrap; */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}
router-link {
   text-decoration: none;
}
.link {
   text-decoration: none;
}

</style>