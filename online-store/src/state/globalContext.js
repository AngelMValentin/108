import { createContext } from 'react';

/* 
* The context is a blueprint/description of the data that will be store on it
* No implementation is allowed here

*/

const GlobalContext = createContext({
    cart: [],
    user: {},

    addProductToCart: () => {},
    clearCart: () => {},
    removeProductFromCart: () => {}
});

export default GlobalContext;