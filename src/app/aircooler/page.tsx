import React from 'react'
import  Style  from '../../app/aircooler/aircooler.module.css'
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
 <img src="/air cooler.webp" alt="" />
</div>

<h1 className={Style.heading} >AIR COOLERS</h1>

<div className={Style.containers}>
    <div className={Style.item}>
      <img src="/neo.webp" alt="Image 1" />
      <div className={Style.text}>
        <h2 className={Style.head} >AURA NEO</h2>
        <p>Power packed with Heavy Duty, Hot & Cold, Super Energy Efficient and Anti-Virus Air Conditioners.</p>
      </div>
    </div>
    <div className={Style.item}>
      <img src="/auro.webp" alt="Image 2" />
      <div className={Style.text}>
        <h2 className={Style.head} >AURA DUO</h2>
        <p>Experience exceptional cooling with the Premium and Classic Range of Air Conditioners.</p>
      </div>
    </div>
  </div>

  <div className={Style.aboutbanner2} >
 <img src="/tower.webp" alt="" />
</div>

<div className={Style.containers}>
    <div className={Style.item}>
      <img src="/astra.webp" alt="Image 1" />
      <div className={Style.text}>
        <h2 className={Style.head} >ASTRA</h2>
        <p>Power packed with Heavy Duty, Hot & Cold, Super Energy Efficient and Anti-Virus Air Conditioners.</p>
      </div>
    </div>
    <div className={Style.item}>
      <img src="/astra2.webp" alt="Image 2" />
      <div className={Style.text}>
        <h2 className={Style.head} >ASTRA2</h2>
        <p>Experience exceptional cooling with the Premium and Classic Range of Air Conditioners.</p>
      </div>
    </div>
  </div>

  




    <Footer />


    </div>
  )
}

export default Cards
