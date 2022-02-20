import React from 'react'

const TravelCard = () => {
  return (
    <section className="travelCard">
      <div className='cardHeaderDetails'>
          <div  >
            <h3>BusCar Travels</h3>
            <ul><p>1 Rest Stop</p></ul>


          </div>
          <div className='travelCardPrice'>
            <h4>Price: <strong>400</strong> </h4>
            <p>30 seats</p>
          </div>
      </div>
      <div className='cardOtherDetails'>
          <div>
            <h5>Departure</h5>
            <small>21:00</small>
          </div>
          <div>
            <h5>Arrival</h5>
            <small>21:00</small>
          </div>
          <div>
            <h5>Travel Time</h5>
            <small>9 hrs</small>
          </div>
          <div>
            <h5>rating</h5>
            
          </div>

      </div>

    </section>
  )
}
export default  TravelCard;
