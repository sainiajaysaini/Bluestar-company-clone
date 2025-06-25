import React from 'react'
import  Style  from '../../app/cardspage/cardspage.module.css'
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
 <img src="/AC-Landing-Page.jpg" alt="" />
</div>

<h1 className={Style.heading} >AIR CONDITIONERS</h1>

<div className={Style.containers}>
    <div className={Style.item}>
      <img src="/flag.webp" alt="Image 1" />
      <div className={Style.text}>
        <h2 className={Style.head} >Flagship ACs</h2>
        <p>Power packed with Heavy Duty, Hot & Cold, Super Energy Efficient and Anti-Virus Air Conditioners.</p>
      </div>
    </div>
    <div className={Style.item}>
      <img src="/invertor.webp" alt="Image 2" />
      <div className={Style.text}>
        <h2 className={Style.head} >Inverter ACs</h2>
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
