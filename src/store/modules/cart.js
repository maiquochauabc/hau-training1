export  const cart = {
    namespaced: true,   
    state: {
     
        cart: loadState() || [],
       
    },    
    actions: {
        addtoCart({commit}, {product, quality}){
            commit('ADD_CART', {product, quality})
        },
        removefromCart({commit}, {product}){
            commit('REMOVE_CART', {product})
        },
        removeallfromCart({commit}){
            commit('REMOVE_ALL_CART')
        }
      
    },
    mutations: {
        // SET_CARTS(state, products) {
        //     state.products = products;
        // },
        ADD_CART(state, {product, quality}) {
            let productincart = state.cart.find(item => {
                return item.product.id === product.id;
            })
            if(productincart){
                productincart.quality += quality;
                saveState(state.cart)
                return
            }
            state.cart.unshift({
                product,
                quality
            })
            saveState(state.cart)
            // console.log(state.cart.length)
        },
        REMOVE_CART(state, {product}) {
            state.cart = state.cart.filter(item => {
                return item.product.id != product.id 
            })            
            saveState(state.cart)
            // console.log(state.cart.length)
        },
        REMOVE_ALL_CART(state) {
            state.cart = [];
            saveState(state.cart)
            
        },
      
        
    },
  
};
function loadState() {
    try {
      var serializedState = localStorage.getItem('cart');
      if (serializedState === null || serializedState == '[]') {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };
  
  function saveState(state){
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('cart', serializedState);
    } catch (err) {
      console.error(`Something went wrong: ${err}`);
    }
  }
  