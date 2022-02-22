import React from 'react';
import Button from '@mui/material/Button';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Print';


const PrintingTickets =()=>{
  return (
    <section className='printingTickets'>
      <div className='printShare'>
        <div className='print'>
       < Button variant="contained" endIcon={<PrintIcon />}>Print</Button>
        </div>
        <div className='share'>
        < Button variant="contained" endIcon={<ShareIcon />}>Share</Button>
        </div>
      </div>
      <button type={"submit"} > Book Another Ticket</button>
    </section>

  )
}
export default PrintingTickets