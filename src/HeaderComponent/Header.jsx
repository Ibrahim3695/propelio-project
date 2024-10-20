import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <div>
            <header id="header">
                <nav class="nav_content">
                    <div class="nav_logo">
                        <h1>PROPELIO</h1>
                    </div>
                    
                    <div class="nav_menu" id="nav_menu">
                        <ul class="nav_list">
                            <li class="dropdown">
                                <a href="./propelio- Listing/listing.html" class="nav_link  dropbtn scroll-link">Listings <i class="bi bi-chevron-down"></i></a>
                                <div class="dropdown-content">
                                    <a href="./propelio- Listing/listing.html">For Sale</a>
                                    <a href="./propelio- Listing/rent&lease.html">Rent & lease</a>
                                </div>
                            </li>

                            <li>
                                <a href="./propelio-Investment/investment.html" class="nav_link scroll-link">Investments</a>
                            </li>


                            <li>
                                <a href="./propelio- About us/AboutUs.html" class="nav_link scroll-link">About Us</a>
                            </li>

                            <button class="get">Get Started</button>

                        </ul>
                        {/* close Button  */}
                        <div class="nav_close" id="nav_close">
                            <i class="bi bi-x-lg"></i>
                        </div>
                    </div>
                    {/* Toggle Button  */}
                    <div class="nav_listIcon" id="nav_listIcon">
                        <i class="bi bi-list"></i>
                    </div>

                </nav>
            </header>
        </div>
    )
}

export default Header