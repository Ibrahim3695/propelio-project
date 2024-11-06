import React, { useState } from 'react'
import "./Header.css"
// import Propeliologos from '../asset/logo.png'
import { BsChevronDown, BsList, BsXLg } from "react-icons/bs";
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    let [isOpen, setIsOpen] = useState(false);

    let toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <header id="headers">
                <nav className="nav_content">
                    <div className="nav_logo">
                        <Link to="/">
                            <img src={"./propeliologo.png"} alt="propelio" />
                        </Link>
                    </div>

                    <ul className={`nav_list ${isOpen ? 'active' : " "}`}>
                        <li className="dropdown">
                            <Link to="" className="nav_link  dropbtn ">Listings<BsChevronDown className='listingIcon' /></Link>
                            <div className="dropdown-content">
                                <Link to="/Listing">For Sale</Link>
                                <Link to="/Rent&Lease">Rent & lease</Link>
                            </div>
                        </li>

                        <li>
                            <NavLink to="/investments"
                                className={({ isActive }) =>
                                    isActive ? "active" : "notActive"
                                } >Investments</NavLink>
                        </li>

                        <li>
                            <NavLink to="/about"
                                className={({ isActive }) =>
                                    isActive ? "active" : "notActive"
                                } >About Us</NavLink>
                        </li>


                    </ul>

                    {/* Toggle Button  */}
                    <div className="menuIcon" id="nav_listIcon" onClick={toggleNavbar}>
                        <i className={isOpen ? <BsList /> : <BsXLg />}></i>
                    </div>

                    <Link to={"/welcomeToPropelio"} className="get">
                        <p>Get Started </p>
                    </Link>
                </nav>
            </header>
        </div>
    )
}

export default Header