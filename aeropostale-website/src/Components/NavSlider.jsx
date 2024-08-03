import React from 'react'
import Slider from 'react-slick';

const NavSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
      };
  return (
    <div>
       <div className="carousel" style={{backgroundColor:"#17274A",color:"white",position:"relative",width:"100%"}}>
      <div style={{margin:"auto",textAlign:"center",paddingTop:"10px"}}>
      <Slider {...settings}>
        <div >
        <h5 >INTRODUCING! Aero x Hello Kitty</h5> 
        </div>
        <div>
        <h5>FREE JEANS When You Buy One + Free Shipping </h5>
        </div>
        <div>
        <h5>Want it ASAP? Buy Online, Pick Up In-Store FREE
        </h5>
        </div>
        <div>
        <h5>50-70% OFF Sitewide + Free Ship Over $50
        </h5>
        </div>
        {/* Add more slides as needed */}
      </Slider>

      
      </div>
      <a href="" style={{top:"5px",right:"5px",position:"absolute",color:"white"}}>Enable accessebility</a>
    </div>
    </div>
  )
}
export default NavSlider
