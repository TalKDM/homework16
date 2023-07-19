import React, {useContext, useState} from 'react'
import { products } from '../../products'
import {ShopContext} from '../../context/ShopContext'
import CartItem from './CartItem'


export default function Cart() {
    const { cartItems,  getTotalCartAmount, checkOutArr } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();




  return (
    <div className='cart'>
        <div>
            <h1>Your Cart Items</h1>
        </div>
        <div className='cartItems'>
            {products.map((val) => {
                if (cartItems[val.id] !== 0) {
                    return <CartItem data={val} />
                }
            })}
        </div>
        {totalAmount > 0 ?
        <div className='checkout'>
            <p>Subtotal: ₪{totalAmount}</p>
            <button onClick={() => {checkOutArr()}}>Checkout</button>
        </div>
        : <h1>Your cart is empty</h1>}
    </div>
  )
}
