import React from 'react'
import { Link } from 'react-router-dom'

const ProductsPage = () => {
  return (
    <div>
      <h4 className='text-center'>Welcome Choose Card And Shipping</h4>
      <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <p className="title"><Link to={'/aeroProducts'} className='text-decoration-none text-light'>User</Link></p>
        </div>
        <div className="flip-card-back">
            <p className="title"><Link  to={'/sellerProducts'}className='text-decoration-none text-light'>Seller</Link></p>
        </div>
    </div>
</div>
    </div>
  )
}

export default ProductsPage 
