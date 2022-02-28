import React from 'react';


const PassengerDetail =()=>{
  return(
    <section className='passengerDetails'>
      <h3>Passenger Detail</h3>
      <div className='passenger'>
        <div>
          <h5>Passenger 1</h5>
        </div>
        <div>
          <h5>Seat 1</h5>
        </div>

      </div>
      <div className='passengerName'>
          <h5>Name</h5>
          <input type={'text'} placeholder=""></input>
      </div>
      <div className='passengerOtherDetails'>
        <div>
          <h5>Age</h5>
            <input type={'number'} placeholder=""></input>

        </div>
        <div className='passengerGender'>
          <h5>Gender</h5>
          <button  className='buttonMale'>Male</button>
          <button>Female</button>
        </div>
      


      </div>
    </section>

  );
}
export default PassengerDetail;