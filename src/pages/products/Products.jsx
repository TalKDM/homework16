import React from 'react'
import { products } from '../../products'
import Prod from '../../components/Prod'

export default function Products() {
  return (
    <div className='shop'>
        <div className='products'>
            {products.map((val) => {
                return <Prod data={val} id={val.id} name={val.name} price={val.price}/>
            })}
        </div>
    </div>
  )
}
