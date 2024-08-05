import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BiHeart, BiLocationPlus, BiMenu, BiSearch, BiUser } from 'react-icons/bi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { Button, Offcanvas } from 'react-bootstrap'
import { CartContext } from '../Context/CartContext'

const Navigation = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {count} = useContext(CartContext)

  const NavLinkStyle ={
    textDecoration: 'none',
    color: '#2e3133',
    fontSize: '1.2rem',
    fontWeight:"500"
  }
  const OffcanvasNavLinkStyle ={
    width:"100%",
    display:"block",
    borderBottom:"1px solid #E6E6E6",
    textDecoration: 'none',
    color: '#2e3133',
    fontSize: '1.5rem',
    fontWeight:"500",
    textAlign:"center",
    padding:"10px",
    marginTop:"30px"
  }

  return (
    <div>
      
      <div className='Navbar d-none d-sm-none d-md-none d-lg-none d-xl-flex d-xxl-flex'>
      <div className='NavPagesMove'>
        <NavLink style={{...NavLinkStyle}}>Women</NavLink>
        <NavLink style={{...NavLinkStyle}}>Men</NavLink>
        <NavLink style={{...NavLinkStyle}}>Jeans</NavLink>
        <NavLink to={'/aeroProducts'} style={{...NavLinkStyle}}>Aero For All</NavLink>
        <NavLink style={{...NavLinkStyle}}  >Clearance</NavLink>
      </div>

      <div className='WebLogo'>
        <NavLink to={"/"}><img src="https://1000logos.net/wp-content/uploads/2022/07/Aeropostale-logo.png" alt="" height={120} width={250}/></NavLink>
      </div>

      <div className='NavIcons'>
        <span><input type="text" placeholder='Search' className='SearchInput' /><BiSearch className='SearchIcon'/> </span>
        <span>{count}</span>
        <NavLink style={{...NavLinkStyle,fontSize:"1.5rem"}} to={'/wishList'}> <BiHeart/> </NavLink>
        <NavLink  style={{...NavLinkStyle,fontSize:"1.5rem"}}> <BiLocationPlus/> </NavLink>
        <NavLink  style={{...NavLinkStyle,fontSize:"1.5rem"}} to={"/login"}> <BiUser/> </NavLink>
        <NavLink  style={{...NavLinkStyle,fontSize:"1.5rem"}} to={"/cartPage"}> <HiOutlineShoppingBag /> </NavLink>
        </div>
      </div>


     <div className="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-none d-xxl-none justify-content-around justify-context-sm-around justify-context-md-around justify-context-lg-none justify-context-xl-none justify-context-xxl-none">
     <NavLink to={"/"}><img src="https://1000logos.net/wp-content/uploads/2022/07/Aeropostale-logo.png" alt="" height={120} width={250}/></NavLink>
      <Button onClick={handleShow} style={{fontSize:"26px"}} variant='none'>
        <BiMenu/>
      </Button>
     </div>
    <hr />
    <Offcanvas show={show} onHide={handleClose} placement='end' >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> <div className='OffCanvasLogo'>
        <NavLink to={"/"}><img src="https://1000logos.net/wp-content/uploads/2022/07/Aeropostale-logo.png" alt="" height={120} width={250}/></NavLink>
      </div></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className='NavPagesMove d-flex flex-column m-auto w-100'>
        <NavLink style={{...OffcanvasNavLinkStyle}}>Women</NavLink>
        <NavLink style={{...OffcanvasNavLinkStyle}}>Men</NavLink>
        <NavLink style={{...OffcanvasNavLinkStyle}}>Jeans</NavLink>
        <NavLink to={'/aeroProducts'} style={{...OffcanvasNavLinkStyle}}>Aero For All</NavLink>
        <NavLink style={{...OffcanvasNavLinkStyle}}  >Clearance</NavLink>
        </div>
        <div className='NavIcons d-block text-center w-100 mt-4'>
        <NavLink style={{...NavLinkStyle,fontSize:"1.5rem"}}> <BiHeart/> </NavLink>
        <NavLink  style={{...NavLinkStyle,fontSize:"1.5rem"}}> <BiLocationPlus/> </NavLink>
        <NavLink  style={{...NavLinkStyle,fontSize:"1.5rem"}} to={"/login"}> <BiUser/> </NavLink>
        <NavLink  style={{...NavLinkStyle,fontSize:"1.5rem"}}> <HiOutlineShoppingBag /> </NavLink>
        </div>
        </Offcanvas.Body>
    </Offcanvas>
    
    </div>

  )
}

export default Navigation
