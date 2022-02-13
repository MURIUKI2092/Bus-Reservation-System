import React, { Fragment } from "react";
import BookingForm from "../components/booking-form";
/* import { FontAwesomeIcon} from "@fortawesome/react-fontawesome" */

const LandPage=({children})=>{
    return(
        <Fragment>
            <div> 
               
            </div>
            <div>{children}</div>
            <section className="landInfo">
        
                <div className="ourDrivers">
                {/* <FontAwesomeIcon icon="fa-solid fa-user-tie" /> */}
                    <h2><strong>EXCEPTIONAL DRIVERS</strong></h2>
                    <small>Our drivers are good and Qualified to ensure your safety.</small>
                </div>
                    <div className="ourVehicles">
                    {/* <FontAwesomeIcon icon="fa-solid fa-taxi-bus" /> */}
                    <h2><strong> BEST VEHICLES</strong></h2>
                    <small>Our vehicles are well maintained and comfortable to our customers.</small>
                </div>
                <div className="Rewards">
                {/* <FontAwesomeIcon icon="fa-solid fa-gift-card" /> */}
                    <h2><strong>TRAVEL REWARDS</strong></h2>
                    <small>Buy six tickets and get one free!</small>
                </div>
            </section>
        </Fragment>
        

    );
    
}
const LandingPage=()=>{
    return(
        <LandPage>
            <BookingForm/>
        </LandPage>
    )
}
export default LandingPage;