<template>
  <div v-if="product.id == id">
    <cart />
    <br />
    <v-card class="mx-auto" max-width="100rem">
        <br/>
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
            <v-col cols="4">
              <v-text-field v-model.number="quality" v-numberOnly>
                <v-icon slot="append" color="green" @click="quality <= 1 ? quality = 1 :quality--">
                  mdi-minus
                </v-icon>
                <v-icon slot="append" color="red" @click="quality++">
                  mdi-plus
                </v-icon>
              </v-text-field>
            </v-col>
          
              <p> Total: <span class="totalprice">${{ product.price * quality }} </span></p>

            <v-card-actions>
              <v-btn
                class="white--text"
                color="deep-purple accent-4"
                @click="addtocart()"
              >
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
      console.log(this.$store.state.product);
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
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
        
      } else { 
          return true;       
      }
    },
  },
  directives: {
    numberOnly: {
      bind(el) {

        // console.log(el);
        el.type = 'number';      
        el.addEventListener('keypress', (e) => {
          let charCode = (e.which) ? e.which : e.keyCode;
          if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
            e.preventDefault();
          } else {
            return true;
          }
        });
      }
    }
  },
  created() {
    this.$store.dispatch("product/getProduct", { productId: this.id });
  },
};
</script>

<style scope>
.totalprice{
    font-size: 1.5rem;
    font-weight: bold;
    color: red;
}
</style>