import React, { createContext,useState } from 'react'
import { products } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let i = 1; i < products.length +1;  i++) {
        cart[i] = 0;
    }
    return cart;
};

export default function ShopContextProvider(props) {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [completeOrder, setCompleteOrder] = useState([]);


    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount;
    };


    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount }));
    };

    const checkOutArr = () => {
        setCompleteOrder([...cartItems])
        setCartItems([])
        console.log(cartItems);
    }



    const contextValue = {
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateCartItemCount,
        getTotalCartAmount,
        checkOutArr
    };

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
