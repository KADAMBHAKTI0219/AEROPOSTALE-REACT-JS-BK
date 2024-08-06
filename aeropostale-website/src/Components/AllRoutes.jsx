import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import AeroProducts from './AeroProducts'
import Description from './Description'
import Login from '../Pages/Login'
import CartPage from './CartPage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aeroProducts" element={<AeroProducts />} />
        <Route path="/description/:id" element={<Description />} />
        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default AllRoutes
