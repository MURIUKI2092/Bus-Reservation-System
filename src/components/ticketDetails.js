import React from "react";

const TicketDetails =()=>{
  return(
    <section className="ticketDetails">
      
      <div className="busRoute">
        <h2><strong>Nakuru-Mombasa</strong></h2>
        <p>Sun,20 April, 21:00</p>
      </div>
      <div className="travelItems">
        <div className="travelItemsBusName">
          <h3>BusCar Travels</h3>
          <p>sleepover(2+1)</p>

        </div>
        <div className="travelItemsBusNameSeatNo">
          <p> Seat No</p>
          <h3>2A,2B</h3>

        </div>
      </div>
      <div className="travelItemsBookingDetails">
        <div >
          <p>Boarding</p>
          <h2>21:00</h2>
          <small>Nakuru square</small>
        </div>
        <div>
          <p>Drop</p>
          <h2>21:00</h2>
          <small>Bus Stop</small>

        </div>

      </div>
      <div className="fareDetails">
        <h5>Total Fare</h5>
        <h3><em>Ksh: </em> 2500</h3>
      </div>
      
    </section>

  )

}
export default TicketDetails;