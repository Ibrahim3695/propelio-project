import React from 'react';
import "./ProductSlider.css";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

// import other things
import { BsGeoAlt } from "react-icons/bs";
import logo1 from '../assets/Frame 31.png';
import image1 from '../assets/section4a.png';
import image2 from '../assets/section4b.png';
import image3 from '../assets/section4c.png';
import logo2 from '../assets/Vector.png'
import { BsArrowRight } from "react-icons/bs";


//  product data
let products = [
  { id: 1, title: "Beracah Gardens Ibadan", location: "Ido-Eruwa, Ibadan , Oyo state", image: image1, km:"500 Sq meter"},
  { id: 2, title: "3 Bedroom Terrace Duplex + BQ ", location: "Ilaje, Ajah, Lagos state", image: image2, km:"500 Sq meter" },
  { id: 3, title: "TWO BEDROOM APARTMENT", location: "Abraham Adesanya, Ogombo Road Ng.", image: image3,  km:"500 Sq meter" },
  {id: 4, title: "Beracah Gardens Ibadan", location: "Ido-Eruwa, Ibadan , Oyo state", image: image1, km:"500 Sq meter"},
  { id: 2, title: "3 Bedroom Terrace Duplex + BQ ", location: "Ilaje, Ajah, Lagos state", image: image2, km:"500 Sq meter" },
  { id: 6, title: "TWO BEDROOM APARTMENT", location: "Abraham Adesanya, Ogombo Road Ng.", image: image3,  km:"500 Sq meter" },
];


const ProductSlider = () => {
  return (
    <section className='section_4'>
      <div className="section4_heading">
        <h2>Featured Properties</h2>
        <p>Browse from our vast array of properties, and select your most preferred choice.</p>
      </div>

      <Swiper
        className='productBox'
        slidesPerView={3}        // Show 3 slides per view
        spaceBetween={20}        // Space between slides
        loop={true}              // Enable looping
        autoplay={{ delay: 3000 }}  // Autoplay with delay
        modules={[Autoplay]}  // Import Swiper modules
       breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
          768: { slidesPerView: 2, spaceBetween: 15 }, // Tablet
          1024: { slidesPerView: 3, spaceBetween: 20 } // Desktop
        }}
      >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <div className="Project">
            <div className="imgbox">
             <img src={product.image} alt={product.title} />
            </div>
            <div  className="project_subheading">
             <div><img src={logo1} alt="logo" className="video-logo"/></div>
             <h4 className="product-name">{product.title}</h4>
             <p className="location"> <BsGeoAlt />{product.location}</p>
             <div className="details">
                <img src={logo2} alt="vector" class="vector" />
                <p>{product.km}</p>
                <Link>Details</Link>
              </div>
            </div>
            
          </div>
        </SwiperSlide>
      ))}
      </Swiper>

      <div className='seebtn'>
        <button className="see"><Link to="/Listing">See all properties<BsArrowRight className='seeIcon'/></Link></button>
      </div>
    </section>
   
  );
};

export default ProductSlider;