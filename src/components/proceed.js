import React from 'react';

const Proceed =()=>{
  return(
    <section className='proceedDetails'>
      <div className='seats'>
        <h5>Seats</h5>
        <span className='circle'>1</span>
        <span className='circle'>2</span>

      </div>
      <div>
        <h5>Amount</h5>
        <p><em>Ksh:</em>1500</p>

      </div>
      <div>
      <button type="submit" placeholder=""><strong>Proceed</strong></button>
      </div>
    </section>

  )
}
export default Proceed;