import React, { useContext } from 'react'
import {ShopContext} from '../context/ShopContext'
import './styles/prod.css'

export default function Prod(props) {
    const {id, name, price} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id]
  return (
    <section>
    <div className='prod'>
        <h3>{name}</h3>
        <p>{price}₪</p>
        <button className='btn' onClick={() => addToCart(id)}>
            Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
    </div>
    </section>
  )
}
