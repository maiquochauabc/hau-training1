<template>
  <div>         
      <div class="checkout__body">
        <v-card class="mx-auto">
          <v-card-title>
            <ul class="checkout__list">
              <li
                class="checkout__item"
                v-for="cart in productincart"
                :key="cart.product.id"
              >
              <div class="checkout__img">
                <img :src="cart.product.image" alt="" />

              </div>
                <div class="cart__text">
                  <p>
                    {{ cart.product.title }}
                  </p>
                  <p>
                    {{ cart.quality + " " }} <span> X ${{ cart.product.price | shortprice}}</span>
                  </p>
                </div>
                <div class="cart__button">
                  ${{ cart.product.price * cart.quality | shortprice}}
                  <button @click="removefromcart(cart.product)">Remove</button>
                </div>
              </li>
             
              <div class="button">                
                  <button class="btn btn-primary" @click="removeallfromcart()">Remove all</button>
                  <button class="btn btn-success" click="fd">Check Out</button>
                </div>
            </ul>
          </v-card-title>
        </v-card>
      </div>
   
  </div>
</template>

<script>
export default {
  computed: {   
    productincart() {        
      return this.$store.state.cart.cart;
    },  
  },
  methods: {
      removefromcart(product){
          this.$store.dispatch("cart/removefromCart", {
        product: product,       
      });
      },
      removeallfromcart(){
          this.$store.dispatch("cart/removeallfromCart");
      }
  },
  filters: {   
    shortprice: function (value) {
      let val = (value/1).toFixed(2).replace('.', ',')
       return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
  },
  directives: {
    numberOnly: {
      bind(el) {

        // console.log(el);
        // el.type = 'number';      
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
};
</script>

<style scope>

.checkout__body {
margin: auto;
  padding: 1rem;
  max-width: 90rem;
  display: block;

}

.checkout__list {
  list-style: none;
  width: 100%;
}
.checkout__item {
  padding-bottom: 1rem;
  padding-top: 1rem;
  width: 100%;
  border-bottom: 0.1px solid currentColor;
  display: flex;
  justify-content: space-around;
}
.checkout__img{
  min-height: 5rem;
  display: inline;
  width: 5rem;
  margin: auto 1rem;
  /* flex-grow: 1; */
  /* text-align: center; */
}
.checkout__img img {    
  width: 4rem;
  /* max-height: 5rem; */
}
.cart__text {
  display: flex;
  flex-direction: column;
  flex-grow: 8;
}
.cart__text p {
  margin: 0;
}
.cart__button {
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
}
.button{
    display: flex;
     justify-content: flex-end;
     gap: 2rem;
     margin-top: 1rem;
}
</style>