import { useState } from 'react';
import GlobalContext from "./globalContext";

function GlobalProvider(props) {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({name: 'Angel', id: 25});

    function addProductToCart(prod) {
        console.log('Global Add', prod);

        let addProductToCartCopy = [...cart];
        addProductToCartCopy.push(prod);
        setCart(addProductToCartCopy);
    }

    function clearCart() {}

    function removeProductFromCart() {}

    return (
        <GlobalContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            clearCart: clearCart,
            removeProductFromCart: removeProductFromCart
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;