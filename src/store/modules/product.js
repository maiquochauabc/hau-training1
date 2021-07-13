import axios from "axios";
const baseURL = 'https://fakestoreapi.com/products/';
export  const product = {
    namespaced: true,   
    state: {
        products: [],
        product: null,
       
    },    
    actions: {
        getProducts ({commit}) {
            axios.get(baseURL)
            .then(response => {
                commit('SET_PRODUCTS', response.data)
                // console.log(response.data);
            })
        }
      
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
        },
        
    }
};