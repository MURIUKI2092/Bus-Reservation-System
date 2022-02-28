import React, { Fragment, useEffect, useState } from "react";
import BookingForm from "../components/booking-form";
/* import { FontAwesomeIcon} from "@fortawesome/react-fontawesome" */
import hd from "../images/head.jpg";
import TravelCard from "../components/travelcard";
import instance from "../utils/axios";

const LandPage = ({ children }) => {
  const [tripData, setTripData] = useState([]);
  useEffect(() => {
    const axios = instance();
    axios
      .get(`/trips/trips/`)
      .then((res) => {
        setTripData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(JSON.stringify(tripData));

<<<<<<< HEAD
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
=======
  return (
    <Fragment>
      <div
        style={{
          backgroundImage: `url(${hd})`,
          backgroundPosition: "absolute",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          padding: "10px",
          minHeight: "55vh",
        }}
      >
        <p>lorem dsfsd f sdf sd fsdfsdfs d f dsfsd f sdfsdf</p>
      </div>
      <div style={{ marginTop: "-150px" }}>{children}</div>
      <section className="landInfo">
        {tripData.map(trip_data => (
          <TravelCard key={trip_data.id} data={trip_data} />
        ))}
      </section>
    </Fragment>
  );
};
const LandingPage = () => {
  return (
    <LandPage>
      <BookingForm />
    </LandPage>
  );
};
export default LandingPage;
>>>>>>> df3d904c55c42a099f901e2f5ece3226c7a80b15
