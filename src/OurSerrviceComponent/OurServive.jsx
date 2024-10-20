import React from 'react'
import "./OurServive.css"

const OurServive = () => {
    return (
        <div>
            <section class="section_5" id="section_5">
                <div class="section4_heading">
                    <h2>Our Services</h2>
                    <p>Propelio offers varieties of services tailored just for you.</p>
                </div>
                <div class="section_5_box">
                    <div class="section5_box1">
                        <div class="eclipse1"></div>
                        <div class="section_5A">
                            <div class="pro-coperation">
                                <h2 class="section5-title"> Property Cooperative</h2>
                                <img src="./img/invest icon 3.png" alt="section5-logo" width="100px" height="100px" />
                            </div>
                            <p>Property cooperative is an investment option on Propelio. It helps you to co-invest with other property owners in the real estate business,
                                at the least possible rate, and earn an ROI at the end of the investment period.
                            </p>
                            <button class="now5"><a href="./propelio-Investment/investment.html">Explore now <i class="bi bi-arrow-right"></i></a></button>
                        </div>
                    </div>

                    <div class="section5_box2">
                        <div class="eclipse2"></div>
                        <div class="section_5AB">
                            <img src="./img/Property 3.png" alt="section5-logo" width="97px" height="100px" />
                            <h2> Property Listings</h2>
                            <p>Read more...</p>
                        </div>
                    </div>

                    <div class="section5_box3">
                        <div class="eclipse3"></div>
                        <div class="section_5AB">
                            <img src="./img/Mockup 2.png" alt="section5-logo" />
                            <h2>Property Mockup</h2>
                            <p>Read more...</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OurServive