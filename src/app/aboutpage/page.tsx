import React from 'react'
import Style from '../../app/aboutpage/aboutpage.module.css'
import Topnav from '../../../components/topnav/page'
import Navbar from '../../../components/navbar/page'
import Footer from '../../../components/footer/page'
const aboutpage = () => {
  return (
    <>

<Topnav />
<Navbar />

<div className={Style.aboutbanner} >
 <img src="/about-banner.jpg" alt="" />
</div>
<div className={Style.header} >
    <h1>COMPANY PROFILE</h1>
</div>
<div className={Style.companyprofile} >
  <img src="/our-company-profile.jpg" alt="" />
   <p>
Blue Star is India leading Air Conditioning, Commercial Refrigeration and MEP (Mechanical, Electrical, Plumbing and Fire-fighting) contracting company with over 80 years of experience. The Company’s philosophy is rooted in the principles of ‘Trust’ and ‘Excellence’, which have served as the guiding force behind its remarkable journey of growth. Renowned for its customer-centric ethos, Blue Star is recognised for delivering innovative, value-driven products and solutions that strongly resonate in the market.
The Company offers a plethora of cooling solutions including chillers, ducted systems, VRFs, room ACs, deep freezers, water coolers, and cold rooms, amongst others. It has also made inroads into air purification, engineering facilities management, commercial kitchen and medical refrigeration. The Company’s integrated business model of a manufacturer; engineering, procurement and construction (EPC) services provider; and an after-sales service provider enables it to provide comprehensive solutions for the Residential, Commercial and Infrastructure segments, making it a key differentiator in the marketplace. Additionally, the Company also offers expertise in allied contracting activities such as electrical, plumbing, fire-fighting and industrial projects, further enhancing its ability to deliver turnkey solutionsprovider enables it to provide comprehensive solutions for the Residential, Commercial and Infrastructure segments, making it a key differentiator in the marketplace. Additionally, the Company also offers expertise in allied contracting activities such as electrical, plumbing, fire-fighting and industrial projects, further enhancing its ability to deliver turnkey solutions.
</p>
</div>


<Footer />


 </>
       

  )
}

export default aboutpage