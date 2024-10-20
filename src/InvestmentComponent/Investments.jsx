import React from 'react'
import "./Investments.css"

const Investments = () => {
  return (
    <div>
      <main>
        <section class="intro">
          <h2>Property Cooperative <br/> <span class="green">–Explore investments opportunities.</span></h2>
          <p class="subheading">Property cooperative is an investment option on Propelio. It helps you to co-invest with other property owners in the real estate business, at the least possible rate, and earn an ROI at the end of the investment period.</p>
        </section>

        <section class="listing" >
          <div class="listing-project" >
            <div class="listing_box">
              <div class="list-img">
                <img src="./img/Mask group.png" alt="image" width="200px"/>
              </div>
              <div class="listing_subheading">
                <div class="list-details">
                  <div>
                    <h4>ALMA PENT HOUSE</h4>
                    <p class="location">15% returns in 12 months</p>

                  </div>
                  <p>156 investors</p>
                </div>
                <div class="list-details">
                  <h4>#5,000 <span class="unit">per unit</span></h4>
                  <p>1,500 units <br/>available</p>
                </div>
              </div>
            </div>
            <div class="listing_box">
              <div class="list-img">
                <img src="./img/Mask group.png" alt="image" width="200px"/>
              </div>
              <div class="listing_subheading">
                <div class="list-details">
                  <div>
                    <h4>ALMA PENT HOUSE</h4>
                    <p class="investment">15% returns in 12 months</p>

                  </div>
                  <p class="location">156 investors</p>
                </div>
                <div class="list-details">
                  <h4>#5,000 <span class="unit">per unit</span></h4>
                  <p class="sold">SOLD OUT</p>
                </div>
              </div>
            </div>

            <div class="listing_box">
              <div class="list-img">
                <img src="./img/Mask group.png" alt="image" width="200px"/>
              </div>
              <div class="listing_subheading">
                <div class="list-details">
                  <div>
                    <h4>ALMA PENT HOUSE</h4>
                    <p class="investment">15% returns in 12 months</p>

                  </div>
                  <p class="location">156 investors</p>
                </div>
                <div class="list-details">
                  <h4>#5,000 <span class="unit">per unit</span></h4>
                  <p class="sold">SOLD OUT</p>
                </div>
              </div>
            </div>

            <div class="listing_box">
              <div class="list-img">
                <img src="./img/Mask group.png" alt="image" width="200px"/>
              </div>
              <div class="listing_subheading">
                <div class="list-details">
                  <div>
                    <h4>ALMA PENT HOUSE</h4>
                    <p class="location">15% returns in 12 months</p>

                  </div>
                  <p>156 investors</p>
                </div>
                <div class="list-details">
                  <h4>#5,000 <span class="unit">per unit</span></h4>
                  <p>1,500 units <br/>available</p>
                </div>
              </div>
            </div>

            <div class="listing_box">
              <div class="list-img">
                <img src="./img/Mask group.png" alt="image" width="200px"/>
              </div>
              <div class="listing_subheading">
                <div class="list-details">
                  <div>
                    <h4>ALMA PENT HOUSE</h4>
                    <p class="location">15% returns in 12 months</p>

                  </div>
                  <p>156 investors</p>
                </div>
                <div class="list-details">
                  <h4>#5,000 <span class="unit">per unit</span></h4>
                  <p>1,500 units <br/>available</p>
                </div>
              </div>
            </div>

            <div class="listing_box">
              <div class="list-img">
                <img src="./img/Mask group.png" alt="image" width="200px"/>
              </div>
              <div class="listing_subheading">
                <div class="list-details">
                  <div>
                    <h4>ALMA PENT HOUSE</h4>
                    <p class="investment">15% returns in 12 months</p>

                  </div>
                  <p class="location">156 investors</p>
                </div>
                <div class="list-details">
                  <h4>#5,000 <span class="unit">per unit</span></h4>
                  <p class="sold">SOLD OUT</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <footer */}
        <footer>
          <div class="footer1">
            <img src="./img/logo.png" alt="logo" class="footer-img"/>
              <ul class="footer-content">
                <li><a href="../propelio- Listing/listing.html">Our products</a></li>
                <li><a href="../propelio- About us/AboutUs.html">About</a></li>
                <li><a href="#">Support</a></li>
              </ul>
          </div>
          <hr class="footer-hr"/>
            <div class="footer2">
              <p>&copy; 2024 Propelio_ng. All rights reserved</p>
              <div class="footer-icon">
                <a href="#"> <i class="bi bi-envelope footer-link" ></i></a>
                <a href="https://www.instagram.com/p/C-kqFkyMoyB/?igsh=bDZuOGZ5dnpmdWZp"><i class="bi bi-instagram footer-link"></i></a>
                <a href="https://www.facebook.com/share/MDeGZRPFpKNEbDYY/?mibextid=qi2Omg"> <i class="bi bi-facebook footer-link"></i></a>
                <a href="https://x.com/Propelio_NG"><i class="bi bi-twitter footer-link"></i></a>
                <a href="https://www.linkedin.com/in/propelio-ng-8b1848324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="bi bi-linkedin footer-link"></i></a>
              </div>
            </div>
        </footer>
      </main>
    </div>
  )
}

export default Investments