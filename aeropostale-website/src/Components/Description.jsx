import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiHeart } from 'react-icons/bi'
import { Link, useParams } from 'react-router-dom'

const Description = () => {
  const {id} =useParams()
  const [singleProductData,setSingleProductData] = useState([])
  const getSingleProductData = (id)=>{
      axios.get(`http://localhost:3000/products/${id}`).then((res)=>setSingleProductData(res.data)).catch(err=>console.log(err))
  }
  const {title,price,image,description,category}=singleProductData
  useEffect(()=>{
    getSingleProductData(id)
  },[])
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <img src={image} alt="" />
        <h3>Price:- {price}</h3>
        <h4>{category}</h4>
        <p>{description}</p>
        <button>
          
        </button>
        <button><Link to={"/addToCart"}>Add To Cart</Link></button>
      </div>
    </div>
  )
}

export default Description
