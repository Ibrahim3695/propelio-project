import React from 'react'
import "./Footer.css"
    
const Footer = () => {
    return (
        <div>
            <footer>
                <div class="footer1">
                    <img src="./img/logo.png" alt="logo" class="footer-img" />
                    <ul class="footer-content">
                        <li><a href="./propelio- Listing/listing.html">Our products</a></li>
                        <li><a href="./propelio- About us/AboutUs.html">About</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
                <hr class="footer-hr" />
                <div class="footer2">
                    <p>&copy; 2024 Propelio_ng. All rights reserved</p>
                    <div class="footer-icon">
                        <a href="#"> <i class="bi bi-envelope footer-icon" ></i></a>
                        <a href="https://www.instagram.com/p/C-kqFkyMoyB/?igsh=bDZuOGZ5dnpmdWZp"><i class="bi bi-instagram footer-icon"></i></a>
                        <a href="https://www.facebook.com/share/MDeGZRPFpKNEbDYY/?mibextid=qi2Omg"> <i class="bi bi-facebook footer-icon"></i></a>
                        <a href="https://x.com/Propelio_NG"><i class="bi bi-twitter footer-icon"></i></a>
                        <a href="https://www.linkedin.com/in/propelio-ng-8b1848324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="bi bi-linkedin footer-icon"></i></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer