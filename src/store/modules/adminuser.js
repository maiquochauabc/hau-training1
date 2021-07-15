import { HTTP } from "../../httpcommon/http-common";
import router from '@/router'

export  const adminuser = {
    namespaced: true,   
    state: {     
        isAuthenticated: sessionStorage.getItem('adminlogin') || false,
       
    },    
    actions: {
        loginAdmin({ commit }, user) {
            HTTP.get(`adminusers`,{
                params: {
                  username: user.username,
                },
                // showLoader: false,
              })             
              .then(response => {
                if (response.data[0].password === user.password) {
                    commit("LOGIN_ADMIN");        
                    sessionStorage.setItem('adminlogin',true)
                    // if (response.token) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('user', JSON.stringify(response));
                    // }
                    // router.push({name: 'ProductAdmin'})           
                    router.push({name: 'ProductAdmin'})           
                } 
               
              });
          },
    },
    mutations: {
        LOGIN_ADMIN(state) {
            state.isAuthenticated = true;
          },
      
        
    },
  
};