import React from 'react'
import Style from '../../app/manufacturing/manufacturing.module.css'
import Topnav from '../../../components/topnav/page'
import Navbar from '../../../components/navbar/page'
import Footer from '../../../components/footer/page'
const aboutpage = () => {
  return (
    <>

<Topnav />
<Navbar />

<div className={Style.aboutbanner} >
 <img src="/manufacturing-banner.jpg" alt="" />
</div>
<div className={Style.header} >
    <h1>History & Overview</h1>
</div>
<div className={Style.companyprofile} >
   <p>
Blue Star’s foray into manufacturing began with a modest effort at producing ice candy machines in the 1940s, from a small office in Forbes Street in Colaba, Mumbai. It was only in the mid-1960s that Mohan T Advani expanded the Company’s manufacturing base by buying a factory in Thane, at that time a distant suburb in Mumbai.

In the late 1990s, with the software boom driving the economy, investments in the manufacturing sector were dwindling. However Blue Star’s management was convinced about the vitality of manufacturing to drive growth in the value chain and for being successful in the longer run.

A new and exciting chapter began with the inauguration of a world-class factory at Dadra in 1997. This unit was equipped with state-of-the-art technologies adhering to high quality standards and manufacturing processes and was set up in consultation with Rheem, USA.

After the success of the Dadra factory, Blue Star was successfully able to replicate this manufacturing philosophy and attitude in its later factories, namely at Himachal Pradesh (HP), Wada and Ahmedabad.

The two fundamental transformations of Blue Star’s manufacturing capabilities took place with the improvement of operational efficiencies and quality, resulting in competitiveness in terms of price and delivery.
</p>
</div>


<Footer />


 </>
       

  )
}

export default aboutpage