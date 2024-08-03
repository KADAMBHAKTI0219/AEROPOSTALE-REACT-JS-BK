import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import AeroProducts from './AeroProducts'
import Description from './Description'
import Login from '../Pages/Login'
import AddToCart from './AddToCart'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aeroProducts" element={<AeroProducts />} />
        <Route path="/description/:id" element={<Description />} />
        <Route path="/addToCart/:id" element={<AddToCart />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default AllRoutes
