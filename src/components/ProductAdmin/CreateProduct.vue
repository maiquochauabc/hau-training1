<template>
  <v-app class="formvuetify">
    <div class="modal__new">
      <v-form ref="form" lazy-validation @submit.prevent="createNewProduct()">
        <v-card>
          <v-card-title>
            <span class="text-h5">Create a new product </span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="product.title"
                    ref="product.title"
                    :rules="[() => !!product.title || 'This field is required']"
                    label="Product Name *"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-col cols="12">
                    <v-text-field
                      type="number"
                      prefix="$"
                      v-model.number="product.price"
                      :rules="[
                        () => !!product.price || 'This field is required',
                        () => product.price > 0 || 'Price must be >0',
                        
                      ]"
                      label="Price *"
                      required
                    >
                    </v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-select
                      v-model="product.category"
                      :rules="[
                        () => !!product.category || 'This field is required',
                      ]"
                      :items="categories"
                      label="Category *"
                      placeholder="Select..."
                      required
                    ></v-select>
                  </v-col>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-img
                    alt=""
                    aspect-ratio="1.7"
                    contain
                    :src="
                      product.image ||
                      `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTThoG_gGpvRorJt0MLZGLxqZef2Aim42X85g&usqp=CAU`
                    "
                  ></v-img>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="product.image"
                    :rules="[() => !!product.image || 'This field is required']"
                    label="Image URL*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="product.description"
                    label="Product description"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="darken-1" text @click="hidecreatedialog()">
              Close
            </v-btn>
            <v-btn type="submit" color="cyan" class="white--text">Create</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      product: {
        title: "",
        category: "",
        image: "",
        price: null,
        description: "",
        category: "",
      },
      categories: [
        "men's clothing",
        "jewelery",
        "electronics",
        "women's clothing",
      ],
    };
  },

  methods: {
    hidecreatedialog() {
      this.$emit("togglecreatedialog", false);
    },
    createNewProduct() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        this.$store.dispatch("product/createNewProduct", this.product);
        this.$store.dispatch("product/getProducts");
        this.$emit("togglecreatedialog", false);
      }
    },
  },
};
</script>

<style scoped>
.modal__new {
  width: 60%;
  /* margin: auto; */
  position: fixed;
  z-index: 3;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>

