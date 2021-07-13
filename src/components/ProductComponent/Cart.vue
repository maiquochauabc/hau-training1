<template>
  <div>
    <div class="cart__group">
      <div class="cart">
        <span class="cart__title">
          Cart
          <span class="badge"> {{ cartquality }} </span>
        </span>
      </div>
      <div class="cart__body" v-if="cartquality">
        <v-card class="mx-auto">
          <v-card-title>
            <ul class="cart__list">
              <li
                class="cart__item"
                v-for="cart in productincart.slice(0, 6)"
                :key="cart.product.id"
              >
                <img :src="cart.product.image" alt="" />
                <div class="cart__text">
                  <p>
                    {{ cart.product.title | shorttitle }}
                  </p>
                  <p>
                    {{ cart.quality + " X $" + cart.product.price }}
                  </p>
                </div>
                <div class="cart__button">
                  ${{ cart.product.price * cart.quality }}
                  <button @click="removefromcart(cart.product)">Remove</button>
                </div>
              </li>
              <li>View all</li>
            </ul>
          </v-card-title>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import product from "../../store/modules/product";
export default {
  computed: {
    cartquality() {
      let cartnumber = 0;
      this.$store.state.cart.cart.forEach((item) => {
        cartnumber += item.quality;
      });
      return cartnumber;
    },
    productincart() {
      return this.$store.state.cart.cart;
    },
  },
  methods: {
      removefromcart(product){
          this.$store.dispatch("cart/removefromCart", {
        product: product,
       
      });
      }
  },
  filters: {
    shorttitle: function (value) {
      if (!value) return "";
      value = value.toString();
      if (value.length <= 30) {
        return value;
      } else {
        return value.substring(0, 30).toString() + "...";
      }
    },
  },
};
</script>

<style scope>
.cart__group {
  position: fixed;
  right: 5rem;
  z-index: 2;
}
.cart__group:visited,
.cart__group:hover .cart__body {
  display: block;
}
.cart {
  background-color: rgba(128, 128, 128, 0.212);
  padding: 1rem 2rem;
  border-radius: 1rem;
}
.badge {
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background-color: green;
  border-radius: 5px;
  color: #fff;
}
.cart__title {
  font-size: 2rem;
}
.cart__body {
  position: absolute;
  right: 0;
  overflow-y: auto;
  padding: 1rem;
  width: 40rem;
  display: none;
}

.cart__list {
  list-style: none;
  width: 100%;
}
.cart__item {
  padding-bottom: 1rem;
  padding-top: 1rem;
  width: 100%;
  border-bottom: 0.1px solid currentColor;
  display: flex;
  justify-content: flex-start;
}
.cart__item img {
  width: 2rem;

  margin: auto 1rem;
  flex-grow: 1;
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
</style>