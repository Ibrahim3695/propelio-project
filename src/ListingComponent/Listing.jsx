import React from 'react'
import './Listing.css'
import { BsSearch } from "react-icons/bs";
import Footer from '../FooterComponent/Footer';
import ListingProp from './ListingProp';
import image1 from '../assets/image 1.png'
import image2 from '../assets/Group 14.png'
import image3 from '../assets/Group 13.png'
import image4 from '../assets/image 162.png'
import image5 from '../assets/image 178.png'
import logo1 from '../assets/Frame 31.png'
import logo1b from '../assets/Vector.png'
import logo2 from '../assets/Vuesax.png'

const Listing = () => {
  return (
    <div>
      <section className="intro">
        <h2>Properties for sale</h2>
        <div className="intro-box">
          <input type="search" name="listing" id="listing"
           placeholder="Search by location here..." />
          <BsSearch className='searchbtn' />
        </div>  
      </section>
      <section className="listing">
        <h2>Available Properties</h2>
        <div className='listing-project'>

          <ListingProp image ={image1} vlogo ={logo1} title ="The Ambiance 3 Smart Homes"
           location =" Abraham Adesanya, Ajiwe, Lagos." logo={logo2} desc ="2 Bedroom Terrace Duplex+ BQ" />  

          <ListingProp image ={image2} title ="Tiwa Garden Phase 2 Estate"
           location =" Lekki Epe, Lagos State" logo={logo1b} desc ="500 Sq meter" />  

          <ListingProp image ={image1} vlogo ={logo1} title ="Citadel Views 2.0 Abraham Adesanya"
           location =" Lekki, Lagos" logo={logo2} desc ="1 Bedroom Apartment" />  

          <ListingProp image ={image1} vlogo ={logo1} title ="The Ambiance 3 Smart Homes"
           location =" Abraham Adesanya, Ajiwe, Lagos." logo={logo2} desc ="2 Bedroom Terrace Duplex+ BQ" />  
          
          <ListingProp image ={image1} vlogo ={logo1} title ="The Ambiance 3 Smart Homes"
           location =" Abraham Adesanya, Ajiwe, Lagos." logo={logo2} desc ="2 Bedroom Terrace Duplex+ BQ" />  

          <ListingProp image ={image1} vlogo ={logo1} title ="The Ambiance 3 Smart Homes"
           location =" Abraham Adesanya, Ajiwe, Lagos." logo={logo2} desc ="2 Bedroom Terrace Duplex+ BQ" />  

          <ListingProp image ={image3} vlogo ={logo1} title ="Beracah Gardens Ibadan"
           location =" Ido-Eruwa, Ibadan , Oyo state" logo={logo1b} desc ="500 Sq meter" />  

          <ListingProp image ={image4} title ="3 Bedroom Terrace Duplex + BQ"
             location =" Ilaje, Ajah, Lagos state" />  

          <ListingProp image ={image1} vlogo ={logo1} title ="Victoria Crest homes"
           location =" Abraham Adesanya, Ogombo Road Ng." logo={logo2} desc ="Two Bedroom Apartment" />  

          <ListingProp image ={image5} vlogo ={logo1} title ="Zylus Court Phase 2"
           location =" Bogije, Ibeju Lekki, Lagos state." logo={logo1b} desc ="500 Sq meter" />  
           
           <ListingProp image ={image4} vlogo ={logo1} title ="4 Bedroom Terrace Duplex @ Waterview "
           location =" Orchid Road, Lekki, Lagos" logo={logo1b} desc ="500 Sq meter" />  
         
         <ListingProp image ={image1} vlogo ={logo1} title ="The Ambiance 3 Smart Homes"
           location =" Abraham Adesanya, Ajiwe, Lagos." logo={logo2} desc ="2 Bedroom Terrace Duplex+ BQ" />  
      
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Listing