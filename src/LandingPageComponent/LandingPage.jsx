import React from 'react'
import Hero from '../HeroPageComponent/Hero'
import Picture from '../PictureScrollComponent/Picture'
import Achieve from '../AchieveComponent/Achieve'
import Featured from '../FeaturedComponent/Featured'
import OurServive from '../OurSerrviceComponent/OurServive'
import Faq from '../FaqComponent/Faq'
import Choose from '../WhyChooseComponent/Choose'
import Footer from '../FooterComponent/Footer'

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Picture />
      <Achieve />
      <Featured />
      <OurServive />
      <Choose />
      <Faq />
      <Footer />
    </div>
  )
}

export default LandingPage