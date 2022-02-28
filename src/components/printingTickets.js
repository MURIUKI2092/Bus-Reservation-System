import React from 'react';

const PrintingTickets =()=>{
  return (
    <section className='printingTickets'>
      <div className='printShare'>
        <div className='print'>
          <h3>Print</h3>
        </div>
        <div className='share'>
          <h3>Share</h3>
        </div>
      </div>
      <button type={"submit"} > Book Another Ticket</button>
    </section>

  )
}
export default PrintingTickets