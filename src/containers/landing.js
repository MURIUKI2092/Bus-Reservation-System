import React, { Fragment } from "react";
import BookingForm from "../components/booking-form";
/* import { FontAwesomeIcon} from "@fortawesome/react-fontawesome" */
import hd from "../images/head.jpg"
import TravelCard from "../components/travelcard";


const LandPage=({children})=>{
    return(
        <Fragment>
            <div style={{backgroundImage:`url(${hd})`,backgroundPosition:'absolute', backgroundSize:'cover', backgroundRepeat:'no-repeat',padding:'10px', minHeight:'55vh'}}>
                <p></p>
            </div>
            <div style={{marginTop:'-150px'}}>{children}</div>
            <section className="landInfo">
                <TravelCard />
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