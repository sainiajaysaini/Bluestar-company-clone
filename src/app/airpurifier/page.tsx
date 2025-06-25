import React from 'react'
import  Style  from '../../app/airpurifier/airpurifier.module.css'
import Topnav from '../../../components/topnav/page'
import Navbar from '../../../components/navbar/page'
import Footer from '../../../components/footer/page'

const Cards
 = () => {
  return (
    <div className={Style.ss}>
<Topnav />
<Navbar />
<div className={Style.aboutbanner} >
 <img src="/Air-Purifier.webp" alt="" />
</div>



<div className={Style.containers}>
    <div className={Style.item}>
      <img src="/bs-ap300.webp" alt="Image 1" />
      <div className={Style.text}>
        <h2 className={Style.head} >BS-AP300DAI</h2>
        <p>Microbe DeActive+ technology effectively deactivates bacteria, mold, pollen, etc.</p>
      </div>
    </div>
    <div className={Style.item}>
      <img src="/ap42.webp" alt="Image 2" />
      <div className={Style.text}>
        <h2 className={Style.head} >AP420OAN</h2>
        <p>Experience exceptional cooling with the Premium and Classic Range of Air Conditioners.</p>
      </div>
    </div>
  </div>


  <div className={Style.containers}>
    <div className={Style.item}>
      <img src="/window.webp" alt="Image 1" />
      <div className={Style.text}>
        <h2 className={Style.head} >Fixed Speed ACs</h2>
        <p>Enjoy instant cooling with the turbo cool mode and hassle-free maintenance.</p>
      </div>
    </div>
    <div className={Style.item}>
      <img src="/fixed.webp" alt="Image 2" />
      <div className={Style.text}>
        <h2 className={Style.head} >Window ACs</h2>
        <p>The best-in-class cooling enabled by a high efficient rotary compressor.</p>
      </div>
    
    </div>
    
  </div>


    <Footer />


    </div>
  )
}

export default Cards
