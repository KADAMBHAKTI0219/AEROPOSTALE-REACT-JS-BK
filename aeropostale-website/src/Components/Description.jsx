import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from './Card'
const Description = () => {
  const [products, setProducts] = useState([]);
  const {id} = useParams()
  
  

  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id}`)
      .then(response => {
        setProducts(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);
  const productArray = Array.isArray(products) ? products : [];
  console.log('Products:', products);
  console.log(productArray)
  return (
    <div className="product-list">
        <div key={products.id}>
        <Card key={products.id} products={products} />
        </div>

      
    </div>
  );
}

export default Description
