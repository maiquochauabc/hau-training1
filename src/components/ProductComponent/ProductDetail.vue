<template>
  <v-app class="formvuetify">
    <div v-if="product.id == id">
      <cart />
      <br />
      <v-card class="mx-auto" max-width="100rem">
        <br />
        <v-row>
          <v-img
            height="200"
            max-width="40%"
            min-width="20rem"
            contain
            :src="product.image"
            :lazy-src="product.image"
            alt=""
          />
          <v-col>
            <div>
              <!-- <div  v-if="hover" class="hover__title">{{ product.title }}</div> -->
              <h3 class="text-h4 product__title">
                {{ product.title }}
              </h3>
              <v-spacer></v-spacer>
              <div class="text-h6">${{ product.price }}</div>
              <v-form ref="form">
                <v-col cols="4">
                  <v-text-field
                    ref="quality"
                    v-model.number="quality"
                    v-numberOnly
                    required
                     :rules="[
                        () => !!quality || 'This field is required',
                        () => quality > 0 || 'Quality must be > 0',
                        () => quality < 100 || 'The quantity is so large please contact us',

                      ]"
                  >
                    <v-icon
                      slot="append"
                      color="red"
                      @click="quality <= 1 ? (quality = 1) : quality--"
                    >
                      mdi-minus
                    </v-icon>
                    <v-icon slot="append" color="green" @click="quality++">
                      mdi-plus
                    </v-icon>
                  </v-text-field>
                </v-col>
              </v-form>

              <p>
                Total:
                <span class="totalprice">${{ product.price * quality }} </span>
              </p>

              <v-card-actions>
                <v-btn color="gray accent-4" @click="addtocart()">
                  Add to Cart
                </v-btn>
              </v-card-actions>
            </div>
          </v-col>
        </v-row>
        <br />
        <v-card-title>
          <div class="product__desc">
            {{ product.description }}
          </div>
        </v-card-title>

        <br />
      </v-card>
    </div>
  </v-app>
</template>

<script>
import Cart from "./Cart.vue";

export default {
  components: { Cart },
  data() {
    return {
      quality: 1,
    };
  },
  props: ["id"],
  methods: {},
  computed: {
    product() {
      // console.log(this.$store.state.product);
      return this.$store.state.product.product;
    },
  },

  methods: {
    addtocart() {
      if (this.quality > 0 && this.quality <= 100) {
        this.$store.dispatch("cart/addtoCart", {
          product: this.product,
          quality: this.quality,
        });
        this.quality = 1;
      }
    },
  },
  mounted() {
    this.$store.dispatch("product/getProduct", { productId: this.id });
    console.log(this.id);
  },
};
</script>

<style scope>
.totalprice {
  font-size: 1.5rem;
  font-weight: bold;
  color: red;
}
</style>