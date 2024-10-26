import React from 'react'
import './Featured.css'
import { BsGeoAlt } from "react-icons/bs";
import logo from '../assets/Frame 31.png';

const Project = ({image, title, location, detailslogo, km }) => {
  return (
    <article className="Project">
        <div className="imgbox">
            <img src={image} alt="image" />
        </div>
        <div className="project_subheading">
          <div><img src={logo} alt="logo" className="video-logo"  /></div>
          <h4>{title}</h4>
          <p className="location"> <BsGeoAlt /> {location}</p>
          <div className="details">
            <img src={detailslogo} alt="vector" class="vector" />
            <p>{km}</p>
            <a href="#">Details</a>
          </div>
      </div>
    </article>
  )
}

export default Project