import React from 'react'
import Hero from '../HeroPageComponent/Hero'
import Picture from '../PictureScrollComponent/Picture'
import Achieve from '../AchieveComponent/Achieve'
import Featured from '../FeaturedComponent/Featured'
import OurServive from '../OurSerrviceComponent/OurServive'
import Choose from '../WhyChooseComponent/Choose'
import Footer from '../FooterComponent/Footer'
import Accordion from '../FaqComponent/Accordion'

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Picture />
      <Achieve />
      <Featured /> 
      <OurServive /> 
      <Choose />
      <Accordion/>
      <Footer /> 
    </div>
  )
}

export default LandingPage