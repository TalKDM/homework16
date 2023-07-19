import React, {useContext} from 'react'
import {ShopContext} from '../../context/ShopContext'
import '../../components/styles/cartitem.css'


export default function CartItem(props) {
    const {id, name, price} = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);


  return (
    <section>
    <div className='cartItem'>
        <h3>{name}</h3>
        <p>{price}₪</p>
        <div className='countHandler'>
            <button onClick={() => removeFromCart(id)}> - </button>
            <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
            <button onClick={() => addToCart(id)}> + </button>
        </div>
    </div>
    </section>
  )
}
