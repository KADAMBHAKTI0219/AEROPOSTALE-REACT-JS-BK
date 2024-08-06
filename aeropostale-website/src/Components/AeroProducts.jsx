import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchContext } from '../Context/Search'

const AeroProducts = () => {
  const [productData,setProductData]=useState([])
  const [category,setCategory] = useState(null)
  const [order,setOrder] = useState(null)
  const { search } =  useContext(SearchContext) || { search: '' };


  const getProductsData = ()=>{
    axios.get('http://localhost:3000/products',{
      params:{
        category:category,
        _sort:"price",
        _order:order,
        q:search

      }
    }).then((res)=>setProductData(res.data)).catch(err=>console.log(err))
  }
  useEffect(()=>{
    getProductsData()
  },[category,order,search])
  return (
   <div>
    <div className='d-flex justify-content-between w-75 m-auto'>
        <div className='ShowCategory'>
          <select name="" id="" onChange={(e)=>setCategory(e.target.value)} className='p-2 border-rounded rounded-2'>
            <option value="">Show Filters</option>
            <option value="Women">Women</option>
            <option value="">Men</option> 
            <option value="">Unisex</option>
          </select>
        </div>
        <div className="SortBy">
          <select name="" id="" onChange={(e)=>setOrder(e.target.value)} className='p-2 border-rounded rounded-2'>
            <option value="">Sort By</option>
            <option value="asc">Price Low To High</option>
            <option value="desc">Price High To Low</option>
          </select>
        </div>
    </div>
     <div className='productsContentMain'>
      {
        productData.map((item)=>(
          <div key={item.id} className='productsContent text-center'>
           <Link to={`/description/${item.id}`}><img src={item.colors[0].image} alt={item.title} style={{width:"100%"}}/></Link>
           
            <h5>{item.title}</h5>
            <h5> ${item.price}</h5>
    
          </div>
        ))
      }
    </div>
   </div>
  )
}

export default AeroProducts
