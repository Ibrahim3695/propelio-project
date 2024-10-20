import React from 'react'
import "./Faq.css"

const Faq = () => {
    return (
        <div>
            <section class="section_7">
                <h2>Frequently Asked Questions</h2>
                <div class="accordion">
                    {/* Question 1 */}
                    <div class="accordion-item">
                        <div class="accordion-header">What does Propelio do?</div>
                        <div class="accordion-content">
                            <h4>What does Propelio do?</h4>
                            <p> Propelio is a Real Estate technology-focused platform designed to assist the millennials, Gen Zs and underserved communities in Nigeria who aspire to own a property but face financial constraints and barriers while trying to make entry into the traditional real estate market,
                                and also help real estate investors in streamlining their operations.</p>
                        </div>
                    </div>

                    {/* Question 2 */}
                    <div class="accordion-item">
                        <div class="accordion-header">How can Propelio Real Estate help me sell or buy properties?</div>
                        <div class="accordion-content">
                            <h4>How can Propelio Real Estate help me sell or buy properties?</h4>
                            <p> <strong>For sellers,</strong> Propelio can assist with everything from staging and marketing your home to navigating offers and closing the deal. <br />
                                <strong>For buyers,</strong> Propelio can help find properties that match your criteria, arrange viewings, and handle negotiations.</p>
                        </div>
                    </div>

                    {/* Question 3  */}
                    <div class="accordion-item">
                        <div class="accordion-header">What benefits can I get when listing or buying a home through Propelio?</div>
                        <div class="accordion-content">
                            <h4>What benefits can I get when listing or buying a home through Propelio?</h4>
                            <p> Access to an extensive network of buyers and sellers, professional staging and photography services,
                                advanced marketing tactics, local market expertise, and exceptional customer service.</p>
                        </div>
                    </div>

                    {/* Question 4 */}
                    <div class="accordion-item">
                        <div class="accordion-header"> What can Propelio do to sell my Property faster?</div>
                        <div class="accordion-content">
                            <h4> What can Propelio do to sell my Property faster?</h4>
                            <p> Propelio provides staging advice, professional photography, marketing plans, and open houses.</p>
                        </div>
                    </div>

                    {/* Question 5  */}
                    <div class="accordion-item">
                        <div class="accordion-header">Does Propelio own the listed properties?</div>
                        <div class="accordion-content">
                            <h4> Does Propelio own the listed properties?</h4>
                            <p> Propelio does not own all the listed properties. But all the properties listed on our platform have been vetted by professionals, and are completely safe to buy, rent, lease or invest in.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Faq