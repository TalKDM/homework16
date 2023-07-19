import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart,HouseLine } from 'phosphor-react'
import './styles/navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='links-left'>
            <Link to='/'>
                <HouseLine size={32} />
            </Link>
        </div>
        <div className='logo'>
            <h2>Sv-Shop</h2>
        </div>
        <div className='links-right'>
            <Link to='/cart'>
                <ShoppingCart size={32} />
            </Link>
        </div>
    </div>
  )
}

