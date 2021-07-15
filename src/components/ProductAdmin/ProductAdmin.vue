<template>
  <div>
    <Alert />
    <div class="product__body">
      <v-card class="mx-auto">
        <v-card-title>
          <ul class="product__list">
            <div class="button">
              <button class="btn btn-info btn-lg" @click="togglecreatedialog()">
                New product
              </button>
            </div>
            <hr />
            <li
              class="product__item"
              v-for="product in products"
              :key="product.id"
            >
              <div class="product__img">
                <img :src="product.image" alt="" />
              </div>
              <div class="product__text">
                <p>
                  {{ product.id + ".  " + product.title }}
                </p>
                <p>${{ product.price }}</p>
              </div>
              <div class="product__button">
                <button class="btn btn-primary" @click="updateProduct(product)">Edit</button>
                <button
                  class="btn btn-danger"
                  @click="deleteProduct(product.id)"
                >
                  Delete
                </button>
              </div>
            </li>
          </ul>
        </v-card-title>
      </v-card>
    </div>

    <ConfirmDelete v-if="isdelete" @closeConfirm="closeConfirm" :productId="productId" />
    <CreateProduct v-if="iscreate" @togglecreatedialog="togglecreatedialog" />
    <UpdateProduct v-if="isupdate" @closeUpdate="closeUpdate" :product="product"/>
  </div>
</template>


<script>
import CreateProduct from "./CreateProduct.vue";
import Alert from "./Alert.vue";
import ConfirmDelete from "./ConfirmDelete.vue";
import UpdateProduct from "./UpdateProduct.vue";
export default {
  data() {
    return {
      iscreate: false,     
      isdelete: false,
      isupdate: false,
      productId: null,
    };
  },

  components: {
    CreateProduct,
    Alert,
    ConfirmDelete,
    UpdateProduct,
  },

  computed: {
    products() {
      return this.$store.state.product.products.reverse();
    },
    createdialog() {
      return this.$store.state.product.createdialog;
    },
  },
  methods: {
    togglecreatedialog() {
      this.iscreate = !this.iscreate;
    },
    deleteProduct(productId) {
      // console.log(productId)
      // this.$store.dispatch("product/deleteProduct", productId);
      // this.$store.dispatch("product/getProducts");
      this.isdelete = true;
      this.productId = productId;
    },
    updateProduct(product) {
      this.isupdate = true;
      this.product = product;
    },
    closeConfirm(){
      this.isdelete = false;
    },
    closeUpdate(){
      this.isupdate = false;
    },
  },
  mounted() {
    this.$store.dispatch("product/getProducts");
  },
};
</script>

<style scope>
.product__body {
  margin: auto;
  padding: 1rem;
  max-width: 90rem;
  display: block;
}

.product__list {
  list-style: none;
  width: 100%;
}
.product__item {
  padding-bottom: 1rem;
  padding-top: 1rem;
  width: 100%;
  border-bottom: 0.1px solid currentColor;
  display: flex;
  justify-content: space-around;
}
.product__img {
  min-height: 5rem;
  display: inline;
  width: 5rem;
  margin: auto 1rem;
  /* flex-grow: 1; */
  /* text-align: center; */
}
.product__img img {
  width: 4rem;
  /* max-height: 5rem; */
}
.product__text {
  display: flex;
  flex-direction: column;
  /* flex-grow: 7; */
}
.product__text p {
  margin: 0;
}
.product__button {
  flex-grow: 2;
  display: flex;
  /* flex-direction: column; */
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
}
.button {
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  margin-top: 1rem;
}
</style>