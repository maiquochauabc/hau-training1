<template>
  <div>
    <div class="form-press container mb-5 mt-5">
      <div class="card">
        <h3 class="card-header text-center">Register</h3>
        <div class="card-body">
          <form @submit.prevent="submitForm() ">
            <div class="form-row row">
              <div class="form-group col-md-6">
                <label class="col-form-label">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  class="form-control"
                  v-model="firstname"
                  v-validate.continues="'required|min:2|max:10'"
                  :class="{
                    'is-invalid': errors.has('firstname'),
                    'is-valid': !errors.has('firstname') && firstname != '',
                  }"
                />
                <div v-if="!errors.has('firstname')" class="valid-feedback">
                  Your first name is valid
                </div>

                <div class="invalid-feedback">
                  <span>{{ errors.first("firstname") }}</span>
                </div>
              </div>
              <div class="form-group col-md-6">
                <label class="col-form-label">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  class="form-control"
                  v-model="lastname"
                  v-validate.continues="'required|min:2|max:10'"
                  :class="{
                    'is-invalid': errors.has('lastname'),
                    'is-valid': !errors.has('lastname') && lastname != '',
                  }"
                />
                <div v-if="!errors.has('lastname')" class="valid-feedback">
                  Your last name is valid
                </div>
                <div class="invalid-feedback">
                  <span>{{ errors.first("lastname") }}</span>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-form-label">Username (API call)</label>
              <input
                type="text"
                name="username"
                class="form-control"
                v-model="username"
                v-validate.continues="
                  'required|min:6|max:15|isusername|uniqueusername'
                "
                :class="{
                  'is-invalid': errors.has('username'),
                  'is-valid': !errors.has('username') && username != '',
                }"
              />
              <div v-if="!errors.has('username')" class="valid-feedback">
                Your username is valid
              </div>
              <div class="invalid-feedback">
                <span v-for="error in errors.collect('username')" :key="error"
                  >{{ error }}.</span
                >
              </div>
            </div>
            <div class="form-group">
              <label class="col-form-label">Email (API call)</label>
              <input
                type="text"
                name="email"
                class="form-control"
                v-model="email"
                v-validate.continues="'required|email|uniqueemail'"
                :class="{
                  'is-invalid': errors.has('email'),
                  'is-valid': !errors.has('email') && email != '',
                }"
              />
              <div v-if="!errors.has('email')" class="valid-feedback">
                Your email is valid
              </div>
              <div class="invalid-feedback">
                <span v-for="error in errors.collect('email')" :key="error"
                  >{{ error }}.</span
                >
              </div>
            </div>
            <div class="form-group">
              <label class="col-form-label">Password (custom vuelidation)</label>
              <input
                type="password"
                name="password"
                ref="password"
                id="password-vee-validate"
                data-vv-as="field"
                class="form-control"
                v-model="password"
                v-validate.continues="'required|min:6|max:15|ispassword'"
                :class="{
                  'is-invalid': errors.has('password'),
                  'is-valid': !errors.has('password') && password != '',
                }"
              />
              <div v-if="!errors.has('password')" class="valid-feedback">
                Your password is valid
              </div>
              <div class="invalid-feedback">
                <span v-for="error in errors.collect('password')" :key="error"
                  >{{ error }}.</span
                >
              </div>
            </div>
            <br />
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                v-model="showpassword"
                v-on:click="tooglePassword()"
              />
              <label for="checkbox">Show password</label>
            </div>
            <div class="form-group">
              <label class="col-form-label">Repeat Password</label>
              <input
                type="password"
                name="repeatpassword"
                data-vv-as="password"
                class="form-control"
                v-model="repeatpassword"
                v-validate.continues="'required|confirmed:password'"
                :class="{
                  'is-invalid': errors.has('repeatpassword'),
                  'is-valid':
                    !errors.has('repeatpassword') && repeatpassword != '',
                }"
              />
              <div v-if="!errors.has('repeatpassword')" class="valid-feedback">
                Your repeatpassword is valid
              </div>
              <div class="invalid-feedback">
                <span
                  v-for="error in errors.collect('repeatpassword')"
                  :key="error"
                  >{{ error }}.</span
                >
              </div>
            </div>

            <br />
            <button type="submit" class="btn btn-success">
              Submit {{ submitstatus }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
import { Validator } from "vee-validate";

Validator.extend("isusername", {
  getMessage: (field) =>
    " Please do NOT input while spaces and special characters.",
  validate: (value) => {
    return new Promise((resolve) => {
      const usernameRegex = /^[A-Za-z][A-Za-z0-9]*$/;
      resolve(usernameRegex.test(value));
    });
  },
});
Validator.extend("uniqueusername", {
  getMessage: (field) =>
    "This username is already registered, please change to another username.",
  validate: (value) => {
    if (value === "") return true;

    return new Promise((resolve) => {
      if (this.debounceUserVee) clearInterval(this.debounceUserVee);
      if (value.length < 6 || value.length > 15) return true;
      const rexUsername = /^[a-zA-Z0-9]*$/gm;
      if (!rexUsername.test(value)) return true;
      return (this.debounceUserVee = setTimeout((_) => {
        return axios
          .get("https://jsonplaceholder.typicode.com/users/", {
            params: {
              username: value,
            },
          })
          .then((response) => {
            return resolve(response.data.length === 0);
          })
          .catch((error) => {});
      }, 1000));
    });
  },
});
Validator.extend("uniqueemail", {
  getMessage: (field) =>
    "This email is already registered, please change to another email.",
  validate: (value) => {
    if (value === "") return true;
    const rexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!rexEmail.test(value)) return true;

    return new Promise((resolve) => {
      if (this.debounceEmail) clearInterval(this.debounceEmail);
      return (this.debounceEmail = setTimeout((_) => {
        return axios
          .get("https://jsonplaceholder.typicode.com/users/", {
            params: {
              email: value,
            },
          })
          .then((response) => {
            return resolve(response.data.length === 0);
          })
          .catch((error) => {});
      }, 1000));
    });
  },
});
Validator.extend("ispassword", {
  getMessage: (field) =>
    " password must contain at least 1 uppercase character, 1 lowercase character, 1 number, 1 special character and NOT contain white spaces.",
  validate: (value) => {
    return new Promise((resolve) => {
      const passwordRegex =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?!.*[\s]).{6,}$/;
      resolve(passwordRegex.test(value));
    });
  },
});

export default {
  name: "FormVeevalidate",
  components: {},
  data() {
    return {
      debounceUserVee: "",
      debounceEmailVee: "",
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
    tooglePassword() {
      let password = document.querySelector("#password-vee-validate");
      if (this.showpassword == false) {
        password.type = "text";
        this.showpassword = !this.showpassword;
      } else {
        password.type = "password";
        this.showpassword = !this.showpassword;
      }
    },
    submitForm() {

        this.$validator.validateAll().then((result) => {
        if (result) {
          this.submitstatus = "SUCCESS";
          return;
        }
         this.submitstatus = "FAIL";
      });      
    },
  },
};
</script>

<style>
</style>