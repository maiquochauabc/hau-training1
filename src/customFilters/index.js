import Vue from 'vue'

 /** UPPERCASE first letter each word */
 const proper = Vue.filter('proper', function (value) {
     if (!value) return ""
     return value.replace( /\w\S*/g, function (txt) {
       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
     });
 })

export default { proper }