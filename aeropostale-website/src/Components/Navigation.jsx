import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BiHeart, BiLocationPlus, BiMenu, BiSearch, BiUser } from 'react-icons/bi'
import { HiOutlineShoppingBag } from 'react-icons/hi'

const Navigation = () => {

  const [menuButton,setMenuButton] = useState(false)
  const NavLinkStyle ={
    textDecoration: 'none',
    color: '#2e3133',
    fontSize: '1.2rem',
    fontWeight:"500"
  }

  return (
    <div>
      
      <div className='Navbar'>
      <div className='NavPagesMove'>
        < NavLink style={{...NavLinkStyle}}>Women</NavLink>
        <NavLink style={{...NavLinkStyle}}>Men</NavLink>
        <NavLink style={{...NavLinkStyle}}>Jeans</NavLink>
        <NavLink to={'/aeroProducts'} style={{...NavLinkStyle}}>Aero For All</NavLink>
        <NavLink style={{...NavLinkStyle}}  >Clearance</NavLink>
      </div>

      <div className='WebLogo'>
        <NavLink to={"/"}><img src="https://1000logos.net/wp-content/uploads/2022/07/Aeropostale-logo.png" alt="" height={120} width={250}/></NavLink>
      </div>

      <div className='NavIcons'>
        <span><input type="text" placeholder='Search' className='SearchInput'/> <BiSearch className='SearchIcon'/> </span>
        <NavLink style={{...NavLinkStyle,fontSize:"1.5rem"}}> <BiHeart/> </NavLink>
        <NavLink  style={{...NavLinkStyle,fontSize:"1.5rem"}}> <BiLocationPlus/> </NavLink>
        <NavLink  style={{...NavLinkStyle,fontSize:"1.5rem"}} to={"/login"}> <BiUser/> </NavLink>
        <NavLink  style={{...NavLinkStyle,fontSize:"1.5rem"}}> <HiOutlineShoppingBag /> </NavLink>
        <button style={{...NavLinkStyle,fontSize:"1.5rem",border:"none",backgroundColor:"#fff"}} onClick={()=>setMenuButton(!menuButton)} className=''> <BiMenu/> </button>
      </div>
      </div>
    <hr />
    </div>
  )
}

export default Navigation
