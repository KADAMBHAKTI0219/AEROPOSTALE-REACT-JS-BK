import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import AeroProducts from './AeroProducts'
import Description from './Description'
import Login from '../Pages/Login'
import CartPage from './CartPage'
import SellerProducts from './SellerProducts'
import EditProducts from './EditProducts'
import AddProducts from './AddProducts'
import ProductsPage from '../Pages/ProductsPage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/productsPage' element={<ProductsPage/>}/>
        <Route path="/aeroProducts" element={<AeroProducts />} />
        <Route path="/description/:id" element={<Description />} />
        <Route path='/editProducts/:id' element={<EditProducts/>}/>
        <Route path="/addProducts" element={<AddProducts />} />
        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path='/sellerProducts' element={<SellerProducts/>}/>
    </Routes>
  )
}

export default AllRoutes
