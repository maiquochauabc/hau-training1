<template>
  <v-app class="formvuetify">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      @submit.prevent="submitForm()"
    >
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="firstname"
              :rules="firstnameRules"
              :counter="10"
              label="First name"
              required
              outlined
             
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="lastname"
              :rules="lastnameRules"
              :counter="10"
              label="Last name"
              required
              outlined
              
            ></v-text-field>
          </v-col>
        </v-row>
        <v-text-field
          v-model="username"
          required
          :counter="15"
          :rules="[
            usernameRules.require,
            usernameRules.min,
            usernameRules.max,
            usernameRules.format,
            usernameRules.unique,
          ]"
          :messages="userMessage"
          @input="isUniqueUser(username)"        
          label="User Name (API call)"
          outlined
         
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="[emailRules.require,emailRules.format,emailRules.unique]"
           :messages="emailMessage"
          @input="isUniqueEmail(email)"
          counter
          label="E-mail (API call)"
          required
          outlined
         
        ></v-text-field>

        <v-text-field
          v-model="password"
          :append-icon="showpassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="passwordRules"           
          :type="showpassword ? 'text' : 'password'"
          name="input-10-1"
          label="password (custom vuelidation)"
          hint="Example: abcA0*"
          :counter="15"
          @click:append="showpassword = !showpassword"
          class="input-group--focused"
          required
          outlined
        
        ></v-text-field>
        <v-text-field
          v-model="repeatpassword"
          :append-icon="showpassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="repeatpasswordRules"
          :type="showpassword ? 'text' : 'password'"
          name="input-10-1"
          label="password"
          :counter="15"
          @click:append="showpassword = !showpassword"
          required
          outlined
        
        ></v-text-field>
        <v-btn class="mr-4" type="submit" :disabled="!valid" color="success">
          submit {{ submitstatus }}
        </v-btn>
      </v-container>
    </v-form>
    <br />
    <br />
    <br />
  </v-app>
</template>

<script>
//  import { required, digits, email, max, regex } from 'vee-validate/dist/rules'

const axios = require("axios");
export default {
  name: "FormVuetify",
  components: {
   
  },

  data() {
    return {
      valid: false,
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      repeatpassword: "",
      showpassword: false,
      submitstatus: "",
      firstnameRules: [
        (v) => !!v || "First Name is required",
        (v) => v.length <= 10 || "First Name must be less than 10 characters",
        (v) => v.length >= 2 || "First Name must be than 2 characters",
      ],
      lastnameRules: [
        (v) => !!v || "Last Name is required",
        (v) => v.length <= 10 || "Last Name must be less than 10 characters",
        (v) => v.length >= 2 || "Last Name must be than 2 characters",
      ],
      userMessage: "",
     
      usernameRules: {
        require: (v) => !!v || "User Name is required",
        min: (v) =>
          v.length <= 15 || "User Name must be less than 15 characters",
        max: (v) => v.length >= 6 || "User Name must be than 6 characters",
        format: (v) =>
          /^[a-zA-Z0-9]*$/.test(v) ||
          "Please do NOT input spaces and special characters.",

        unique: (v) => true || this.userMessage,
      },
      emailMessage: "",
      emailRules: {
        require: (v) => !!v || "E-mail is required",
        format: (v) =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || "E-mail is incorrect format",
        unique: (v) => true || this.emailMessage,
      },
      passwordRules: [(v) => !!v || "Password is required",
       (v) => v.length <= 15 || "Password must be less than 15 characters",
       (v) => v.length >= 6 || "Password must be than 6 characters",
      (v) =>
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?!.*[\s]).{6,}$/.test(
            v
          ) || "Password must contain at least 1 uppercase character, 1 lowercase character, 1 number, 1 special character and NOT contain white spaces.",
     
      ],
      repeatpasswordRules: [
        (v) => !!v || "Repeat Password is required",
        (v) => v === this.password || "The password you entered don't match",
      ],
    };
  },
  computed: {},

  methods: {
      isUniqueUser(value) {
      this.userMessage = "";
      this.usernameRules.unique = true;
      //  console.log(rexUsername.test(value));
     return new Promise((resolve) => {
       if (this.debounceUsername) clearInterval(this.debounceUsername);
       return this.debounceUsername = setTimeout((_) => {
         if (!this.username) return true;   
         if (value === "") return true;
         if (value.length < 6 || value.length > 15) return true;
         const rexUsername = /^[a-zA-Z0-9]*$/gm;
         if (!rexUsername.test(value)) return true;
        return  axios.get("https://jsonplaceholder.typicode.com/users/", {
              params: {
                username: value,
              },
            })
            .then((response) => {
              
              if (response.data.length > 0) {
                this.usernameRules.unique = false;
                this.userMessage =
                  "This username is already registered, please change to another username.";
              }
            })
            .catch((error) => {
             
            });
        }, 2000);
      });
    },

     isUniqueEmail(value) {
       this.emailRules.unique = true;
       this.emailMessage ="";                 

         if (value === "") return true;
        const rexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
         if(!rexEmail.test(value)) return true
        return new Promise((resolve) => {
          if (this.debounceEmail) clearInterval(this.debounceEmail);
          return (this.debounceEmail = setTimeout((_) => {
            if (!this.email) return true;            
            return axios
              .get("https://jsonplaceholder.typicode.com/users/", {
                params: {
                  email: value,
                },
              })
              .then((response) => {               
                 if (response.data.length > 0) {
                this.emailRules.unique = false;
                this.emailMessage =
                  "This email is already registered, please change to another email.";
              }
              })
              .catch((error) => {
               
              });
          }, 2000));
        });
      },
    submitForm() {
      if (!this.$refs.form.validate()) {
        this.submitstatus = "FAIL";
      } else {
        this.submitstatus = "SUCCESS";
      }
    },
  },
};
</script>

<style scope>
.formvuetify {
  width: 80%;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}
</style>