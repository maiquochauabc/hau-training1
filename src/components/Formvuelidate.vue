<template>
  <div>
    <div class="form-press container mb-5 mt-5">
      <div class="card">
        <h3 class="card-header text-center">Register</h3>
        <div class="card-body">
          <form @submit.prevent="submitForm()">
            <div class="form-row row">
              <div class="form-group col-md-6">
                <label class="col-form-label">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model.trim="$v.firstname.$model"
                  :class="{
                    'is-invalid': $v.firstname.$error,
                    'is-valid': !$v.firstname.$invalid,
                  }"
                />
                <div class="valid-feedback">Your first name is valid</div>
                <div class="invalid-feedback">
                  <span v-if="!$v.firstname.required"
                    >First name is required.</span
                  >
                  <span v-if="!$v.firstname.minLength"
                    >First name must have at least
                    {{ $v.firstname.$params.minLength.min }} letters
                  </span>
                  <span v-if="!$v.firstname.maxLength"
                    >First name must have at most
                    {{ $v.firstname.$params.maxLength.max }} letters
                  </span>
                </div>
              </div>
              <div class="form-group col-md-6">
                <label class="col-form-label">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model.trim="$v.lastname.$model"
                  :class="{
                    'is-invalid': $v.lastname.$error,
                    'is-valid': !$v.lastname.$invalid,
                  }"
                />
                <div class="valid-feedback">Your Last name is valid</div>
                <div class="invalid-feedback">
                  <span v-if="!$v.lastname.required"
                    >Last name is required.</span
                  >
                  <span v-if="!$v.lastname.minLength"
                    >Last name must have at least
                    {{ $v.lastname.$params.minLength.min }} letters
                  </span>
                  <span v-if="!$v.lastname.maxLength"
                    >Last name must have at most
                    {{ $v.lastname.$params.maxLength.max }} letters
                  </span>
                </div>
              </div>
            </div>
            
            <div class="form-group">
              <label  class="col-form-label">Username (custom validation with API call)</label>
              <input
                type="text"
                class="form-control"
                v-model.trim="$v.username.$model"
                :class="{
                  'is-invalid': $v.username.$error,
                  'is-valid': !$v.username.$invalid,
                }"
              />
              <div class="valid-feedback">Your username name is valid</div>
              <div class="invalid-feedback">
                <span v-if="!$v.username.required">Username is required.</span>
                <span v-if="!$v.username.alphaNum">Please do NOT input spaces and special characters.</span>
                <span v-if="!$v.username.minLength"
                    >Username must have at least
                    {{ $v.username.$params.minLength.min }} letters.
                  </span>
                  <span v-if="!$v.username.maxLength"
                    >Username must have at most
                    {{ $v.username.$params.maxLength.max }} letters.
                  </span>
                <span v-if="!$v.username.isUnique"
                  >This username is already registered, please change to another username.
                </span>
              </div>              
            </div>
            <div class="form-group">
              <label class="col-form-label">Email (custom validation with API call)</label>
              <input
                type="text"
                class="form-control"
                v-model.trim="$v.email.$model"
                :class="{
                  'is-invalid': $v.email.$error,
                  'is-valid': !$v.email.$invalid,
                }"
              />
              <div class="valid-feedback">Your email name is valid</div>
              <div class="invalid-feedback">
                <span v-if="!$v.email.required">Email is required.</span>
                <span v-if="!$v.email.email">Incorrect email format.</span>
                <span v-if="!$v.email.isUnique"
                  >This email is already registered, please change to another email.
                </span>
              </div>
            </div>
            <div class="form-group">
              <label class="col-form-label">Password (custom vuelidation)</label>
              <input id="password"
                type="password"
                class="form-control"
                v-model.trim="$v.password.$model"
                :class="{
                  'is-invalid': $v.password.$error,
                  'is-valid': !$v.password.$invalid,
                }"
              />
              <div class="valid-feedback">Your password name is valid</div>
              <div class="invalid-feedback">
                <span v-if="!$v.password.required">password is required.</span>
                <span v-if="!$v.password.minLength"
                    >Password must have at least
                    {{ $v.password.$params.minLength.min }} letters.
                  </span>
                  <span v-if="!$v.password.maxLength"
                    >Password must have at most
                    {{ $v.password.$params.maxLength.max }} letters.
                  </span>
                <span v-if="!$v.password.isPassword">password must contain at least 1 uppercase character, 1 lowercase character, 1 number, 1 special character and NOT contain white spaces.</span>
                
              </div>
            </div>
            <br/>
            <div class="form-check">              
              <input type="checkbox" class="form-check-input" v-model="showpassword" v-on:click="tooglePassword()">
              <label class="col-form-label">   Show password</label>
            </div>
            <div class="form-group">
              <label class="col-form-label">Repeat Password</label>
              <input id="repeatpassword"
                type="password"
                class="form-control"
               v-model.trim="$v.repeatpassword.$model"
                :class="{
                  'is-invalid': $v.repeatpassword.$error,
                  'is-valid': !$v.repeatpassword.$invalid && !$v.password.$invalid,
                }"
              />
              <div class="valid-feedback">Your repeat password name is valid</div>
              <div class="invalid-feedback">                
                <span v-if="!$v.repeatpassword.required">Repeat password is required.</span>
                 <span v-else-if="!$v.email.sameAs">Repeat password is incorrect.</span>
                
              </div>
            </div>
            <br/>
            <button type="submit" class="btn btn-success">Submit {{ submitstatus }} </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

import {
  required,
  minLength,
  maxLength,
  between,
  alpha,
  alphaNum,
  email,
  sameAs,

} from "vuelidate/lib/validators";


export default {
  name: "Formvuelidate",
  data() {
    return {
      debounceUsername: "",
      debounceEmail: "",
      checking: false,
      firstname: "",
      lastname: "", 
      username: "",
      email: "",
      password: "",
      repeatpassword: "",
      showpassword: false,
      submitstatus: "",
    };
  },
  methods: {
    tooglePassword (){
      let password = document.querySelector("#password");
      if(this.showpassword == false){
        password.type = "text"
        this.showpassword = !this.showpassword
      }else{
         password.type = "password"
        this.showpassword = !this.showpassword
      }
    } ,
    submitForm(){
      this.$v.$touch();

      if(this.$v.$invalid){
        this.submitstatus = "FAIL"
      }
      else{
        this.submitstatus = "SUCCESS"
      }
    }
  },

  validations: {
    firstname: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(10),
    },
    lastname: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(10),
    },
   
    username: {
      required,
      alphaNum,
       minLength: minLength(6),
       maxLength: maxLength(15),
      isUnique(value) {
         if (value === "") return true;
         if (value.length < 6 || value.length > 15 ) return true;
         const rexUsername = /^[a-zA-Z0-9]*$/gm
         if(!rexUsername.test(value)) return true
        //  console.log(rexUsername.test(value));
        return new Promise((resolve) => {
          if (this.debounceUsername) clearInterval(this.debounceUsername);
          return (this.debounceUsername = setTimeout((_) => {
            if (!this.username) return true;
            this.checking = true;
            return axios
              .get("https://jsonplaceholder.typicode.com/users/",  {
                params: {
                  username: value,
                },
              })
              .then((response) => {
                // if (response.data[0].username == value) resolve(false);
                this.checking = false;
                return resolve(response.data.length === 0);
              })
              .catch((error) => {              
              });
          }, 1000));
        });
      },
    },
    email: {
      required,
      email,
      isUnique(value) {
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
                  email: this.email,
                },
              })
              .then((response) => {               
                return resolve(response.data.length === 0);
              })
              .catch((error) => {
               
              });
          }, 1000));
        });
      },
      // isEmail(value) {
      //   if (value === "") return true;
      //   const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      //   return new Promise((resolve) => {
      //     setTimeout(() => {
      //       resolve(emailRegex.test(value));
      //     }, 350 + Math.random() * 300);
      //   });
      // },
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(15),
      isPassword(value){
          if (value === "") return true;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?!.*[\s]).{6,}$/
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(passwordRegex.test(value));
          }, 350 + Math.random() * 300);
        });
      }
    },
    repeatpassword: {
      required,
      sameAsPassword: sameAs('password')
    }
  },
};
</script>

<style scope>
.form-press {
  width: 100%;
  max-width: 50rem;
}
</style>