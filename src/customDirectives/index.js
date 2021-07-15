import Vue from "vue";

const numberOnly = Vue.directive("numberOnly", {
  bind(el) {
    // console.log(el);
    el.type = "number";
    el.addEventListener("keypress", e => {
      let charCode = e.which ? e.which : e.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        e.preventDefault();
        return 1;
      } else {
        return true;
      }
    });
  }
});
export default { numberOnly };
