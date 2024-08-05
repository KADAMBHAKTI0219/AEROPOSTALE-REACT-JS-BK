import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

const AeroProducts = () => {
  const [productData,setProductData]=useState([])
  const [search,setSearch]=useState(null)
  const getProductsData = ()=>{
    axios.get('http://localhost:3000/products',{
      params:{
        q:search
      }
    }).then((res)=>setProductData(res.data)).catch(err=>console.log(err))
  }
  useEffect(()=>{
    getProductsData()
  },[])
  return (
    <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)"}}>
      {
        productData.map((item)=>(
          <div key={item.id} >
           <Link to={`/description/${item.id}`}><img src={item.colors[0].image} alt={item.title} height={350} width={300}/></Link>
           
            <h3>{item.title}</h3>
            <h4>$ {item.price}</h4>
          </div>
        ))
      }
    </div>
  )
}

export default AeroProducts
