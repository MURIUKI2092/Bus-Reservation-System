import React from "react";


const Footer=()=>{
    return(
        <section className="footer">
        <div className="footerDetails">
            <div className="about">
          
            </div>
            <div className="service">
                <h3><strong>Our products</strong></h3>
                <li>Ride</li>
                <li>Become a driver</li>
                <li>Business</li>
                <li>Ride</li>
                <li>Become a driver</li>
                <li>Business</li>
            </div>
            <div className="contact">
            <h3><strong>Help and support</strong></h3>
                
                <li>Help Center</li>
                <li>Contacts</li>
                <li>Airports</li>
                <li>cities</li>
                
            </div>
            <div className="socials">
            <h3><strong>About</strong></h3>
                <li>About SAFIRI</li>
                <li>Security</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Press</li>
                <li>Influencers</li>
                
            </div>

        </div>
        <div className="otherDetails">
            <div className="terms">
                <p>
                    terms & conditions. Privacy Policy
                </p>

            </div>
            <div className="copyright">
                <p>
                    &copy;  copyright {new Date().getUTCFullYear()}. SAFIRI is a registered Trademark
                </p>

            </div>

        </div>


    </section>
    );

}
export default Footer

