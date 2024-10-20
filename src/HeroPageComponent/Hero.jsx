import React from 'react'
import "./Hero.css"
const Hero = () => {
    return (
        <div>
            <section class="section_1" id="section_1">
                <div class="hero_section">
                    <div class="hero">
                        <h1 class="hero_section_title">Fulfilling your <span class="orange">ownership</span> and
                            <span class="orange"> investment</span> dreams.
                        </h1>
                        <p class="empower">Empowering individuals to achieve their homeownership dreams and <br />
                            build wealth through accessible and innovative real estate solutions.
                        </p>
                        <div class="hero_subheading">
                            <i class="bi bi-search"></i>
                            <input type="search" name="listing" id="listing"
                                placeholder="Enter your email here... " />
                            <button type="button" class="search">Join our waitlist</button>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    )
}

export default Hero