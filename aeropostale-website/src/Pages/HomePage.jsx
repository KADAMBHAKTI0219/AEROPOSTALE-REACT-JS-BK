import React from 'react'
import Footer from '../Components/Footer'

const HomePage = () => {
  return (
    <div>
        {/* Updates Promo */}
        <div className='UpdatesPromo'>
            <div className='UpdatePromoLiveBox'>
                <div>
                  <h5>Shorts</h5>
                  <h5>$12 & UP *</h5>
                </div>
                <div className='UpdatePromoLinks'>
                  <a href="">Women</a>
                  <a href="">Men</a>
                </div>
            </div>
            <div className='UpdatePromoLiveBox'>
                <div>
                  <h5>UP TO 50% OFF </h5>
                  <h5>NEW ARRIVALS</h5>
                </div>
                <div className='UpdatePromoLinks'>
                  <a href="">Women</a>
                  <a href="">Men</a>
                </div>
            </div>
            <div className='UpdatePromoLiveBox'>
                <div>
                  <h5>NEW TO CLEARANCE</h5>
                  <h5>$5.99 & UP *</h5>
                </div>
                <div className='UpdatePromoLinks'>
                  <a href="">Women</a>
                  <a href="">Men</a>
                </div>
            </div>
        </div>

        {/* Yellow Banner */}
        <div className='yellowBanner w-100'>
          <div className="row d-flex justify-content-between w-100">
          <div className='col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8'>
            <img src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw956e2e28/images/2024/Home/071024/A_SPOT_BTS%20DEALS_DT.png" alt="" className='img-fluid w-75'/>   </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <div className='AeroBtsDeals'> <a href="">Women</a>
        <a href="">Men</a></div>
        </div>
      </div>
        </div>

        {/* Jeans Shipping */}
        
        <div className='JeansShipping'>
          <img src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw0b50d559/images/2024/Home/073124/B-POT%20JEANS%20BOGO.%20DT-min.png" alt="" className='jeansShippingText'/>
        </div>

        {/* HelloKitty */}
        <div className='HelloKitty'>
              <img src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw2f2a3691/images/2024/Home/073124/C-SPOT%20HK%20AERO%20DT-min.png" alt="" className='helloKittyText'/>
        </div>

        {/* AEROFORALL Banner*/}
        <div className='AEROFORALLBanner'>
        <div  className='aeroforalltext'>
        <img src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwd88a37c5/images/2024/Home/073124/D-SPOT%20AERO%20FOR%20ALL%20LOGO-min.png" alt="" className='aeroforimg'></img>
          <h3>FEAT.AERO ESSENTIALS</h3>
          <p className='fs-5'>Oversized fleece for all. Shop new styles made with the planet in mind</p>
          <button className='p-1 fs-5 border-rounded rounded-3 border-0'>Shop Now</button>
        </div>
        </div>

        {/* Blue Images */}
        <div className='BlueImages'>
          <img src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw25fa6242/images/2024/Home/072424/Shorts%20Badge-min.png" alt="" height={200} width={200}/>
        </div>

      <Footer/>


    </div>
  )
}

export default HomePage
