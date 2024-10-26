import React from 'react'
import "./Featured.css"
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import Project from './Project';
import image1 from '../assets/section4a.png'
import logo1 from '../assets/Vector.png'
import image2 from '../assets/section4b.png'
import image3 from '../assets/section4c.png'
import image4 from '../assets/section4d.png'


const Featured = () => {
    return (
        
        <section className="section_4" id="section_4">
            <div className="section4_heading">
                    <h2>Featured Properties</h2>
                    <p>Browse from our vast array of properties, and select your most preferred choice.</p>
            </div>
                <div className="project-container swiper-container">
                    <div className="project-slider">
                        <Project
                         image = {image1}
                         title='Beracah Gardens Ibadan '
                         location='Ido-Eruwa, Ibadan , Oyo state'
                         detailslogo={logo1}
                         km='500 Sq meter'
                        />

                        <Project
                         image = {image2}
                         title='3 Bedroom Terrace Duplex + BQ '
                         location='Ilaje, Ajah, Lagos state'
                         detailslogo={logo1}
                         km='500 Sq meter'
                        />

                        <Project
                         image = {image3}
                         title='TWO BEDROOM APARTMENT'
                         location='Abraham Adesanya, Ogombo Road Ng.'
                         detailslogo={logo1}
                         km='500 Sq meter'
                        />

                        <Project
                         image = {image3}
                         title='3 Bedroom Terrace Duplex + BQ '
                         location='Ilaje, Ajah, Lagos state '
                         detailslogo={logo1}
                         km='500 Sq meter'
                        />

                        <Project
                         image = {image1}
                         title='Beracah Gardens Ibadan '
                         location='Ido-Eruwa, Ibadan , Oyo state'
                         detailslogo={logo1}
                         km='500 Sq meter'
                        />

                        <Project
                         image = {image2}
                         title='3 Bedroom Terrace Duplex + BQ '
                         location='Ilaje, Ajah, Lagos state'
                         detailslogo={logo1}
                         km='500 Sq meter'
                        />

                        <Project
                         image = {image3}
                         title='3 Bedroom Terrace Duplex + BQ '
                         location='Ilaje, Ajah, Lagos state '
                         detailslogo={logo1}
                         km='500 Sq meter'
                        />
                    </div>
                </div>
            <button className="see"><Link to="/Listing">See all properties <BsArrowRight className='seeIcon'/></Link></button>
        </section>
        
    )
}

export default Featured