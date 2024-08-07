import React from 'react'
import { Link } from 'react-router-dom'

const ProductsPage = () => {
  return (
    <div>
      <h4 className='text-center'>Welcome Choose Card And Shipping</h4>
      <div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <p class="title"><Link to={'/aeroProducts'} className='text-decoration-none text-light'>User</Link></p>
        </div>
        <div class="flip-card-back">
            <p class="title"><Link  to={'/sellerProducts'}className='text-decoration-none text-light'>Seller</Link></p>
        </div>
    </div>
</div>
    </div>
  )
}

export default ProductsPage 
