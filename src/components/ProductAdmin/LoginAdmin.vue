<template>
  <v-app class="formvuetify login__admin">
    <div class="">
      <v-form
        ref="form"       
        lazy-validation
        @submit.prevent="loginAdmin()"
      >
        <v-card>
          <v-card-title>
            <span class="text-h5">Login</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="user.username"
                    ref="product.title"
                    :rules="[() => !!user.username || 'This field is required']"                    
                    label="Username"
                    required
                  ></v-text-field>
                </v-col>               
                <v-col cols="12">
                  <v-text-field
                    v-model="user.password"
                    :rules="[() => !!user.password || 'This field is required']"
                    label="Password"
                    required
                  ></v-text-field>
                </v-col>                
              </v-row>
            </v-container>        
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="darken-1" text >
              Close
            </v-btn>
            <v-btn type="submit" color="primary" style="color: white"
              >Login</v-btn
            >
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
            user: {
                username: "",
                password: "",

            }
        }
    },
    methods: {
        loginAdmin(){
            this.$store.dispatch("adminuser/loginAdmin", this.user);
        }
    }
};
</script>

<style scope>
.login__admin{
   position: fixed;
  z-index: 3;
  left: 50%;
  top: 80%;
  transform: translate(-50%, -50%);
}
</style>