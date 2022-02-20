import React ,{Fragment} from "react";
import Congratulations from "../components/congratulations";
import PrintingTickets from "../components/printingTickets";
import TicketDetails from "../components/ticketDetails";

const Booked =({children})=>{
  return(
    <Fragment>
      <Congratulations/>
      <TicketDetails/>
      <PrintingTickets/>

    </Fragment>

  )
}
export default Booked