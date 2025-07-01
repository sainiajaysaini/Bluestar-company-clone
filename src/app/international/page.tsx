import React from 'react'
import Style from '../../app/international/international.module.css'
import Topnav from '../../../components/topnav/page'
import Navbar from '../../../components/navbar/page'
import Footer from '../../../components/footer/page'
const aboutpage = () => {
  return (
    <>

<Topnav />
<Navbar />

<div className={Style.aboutbanner} >
 <img src="/videsh.jpg" alt="" />
</div>

<div className={Style.companyprofile} >
   <p>
Employees at Blue Star come from various walks of life, and this mix of people provides for a rich mix of diversity in all its aspects, be it geography, ethnicity, language, gender, religion, caste or creed. A job at Blue Star isn’t just about a career. It inculcates in the employee a whole new way of life. It is called the Blue Star Way.

People, Processes and Practices are the three cornerstones of Blue Star’s pursuit towards excellence.

Business in the Company is not just about the bottom line, it is about building people. Employees cherish the freedom that is provided to them at work and this will continue to be the Company’s proposition at all times. All employee training and processes are focused on this primary purpose – to develop good employees, and more importantly, to nurture and grow the best.

Value systems are important at Blue Star. Ethics, honesty, sincerity of purpose and team play, among many others form the core of the thinking of the people. These are essential attributes for the success of the business and Blue Star firmly believes in a higher purpose – to help build character.

Growth prospects are aplenty at the Company. Freshers start as Trainees but are quickly absorbed into mainstream work. With fast and expansive growth, the opportunities for individual growth and betterment are endless and are limited only by talent and effort. Training, personal development and technological upgradation are constant processes at the Company.

Blue Star’s over seventy years of experience and the successful nurturing of thousands of Blue Starites gives the Company the confidence in its systems and human resources.

The Company provides expert cooling solutions across the country and now in many other parts of the world as well, like the SAARC nations and the Middle East. Group companies such as Blue Star Electronics & Engineering are leaders in their own fields. Blue Star has also recently successfully forayed into the businesses of water purifiers, air purifiers and air coolers.

Blue Star does not charge any candidate directly or indirectly any monetary or non monetary return for evaluation or consideration of their candidature. We also wish to state that we have not partnered with any third party or consultants for handling the recruitment activities with any cost implication to the applicant.
</p>
</div>


<Footer />


 </>
       

  )
}

export default aboutpage