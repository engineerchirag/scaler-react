import { createContext } from 'react';
import { useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState({
        // id1: {
        //     count: 10,
        //     product: {},
        // }
    });

    const addToCart = (product, countDelta) => {
        setCartItems((preValue) => {
            return {
                ...preValue,
                [product.id]: preValue[product.id] ? {
                    count: preValue[product.id].count + countDelta,
                    product,
                } : {
                    count: countDelta,
                    product,
                }
            };
        });
    }

    return (
        <CartContext.Provider value={{cartItems, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;