import {HTTP} from '../../httpcommon/http-common'
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
            HTTP.get(`products`)
            // axios.get(baseURL)
            .then(response => {             
                commit('SET_PRODUCTS', response.data)                
                // console.log(response.data);
            })
        },
        getProduct({commit}, {productId}) {
           
            // if (state.products.length > 0) {
            //     let product = state.products.find(item => {
            //         return item.product.id === productId;
            //     })
            //     commit('SET_PRODUCT', product)  
            // }else{
                console.log(productId)
                HTTP.get(`products/${productId}`)
            // axios.get(baseURL)
            .then(response => {             
                commit('SET_PRODUCT', response.data)      
                 console.log(response.data);          
            })
            // }
            
        }
      
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
        },
        SET_PRODUCT(state, product) {
            state.product = product;
        },
        
    }
};