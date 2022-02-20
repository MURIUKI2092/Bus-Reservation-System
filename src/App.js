import React, { Fragment } from "react"
import {
  BrowserRouter as Router,
  Switch,Route
  /* Routes,
  
  Link */
} from "react-router-dom";
import './style.css';
import './App.css';
import NavigationBar from "./components/navbar";
import Footer from "./components/footer";
import MainContainer from "./containers/main";
//import TravelCard from "./components/travelcard"
import TheRoutes from "./components/routes";
import PassengerDetail from "./components/pasengerDetails";
import TicketDetails from "./components/ticketDetails";
import PrintingTickets from "./components/printingTickets";
import Congratulations from "./components/congratulations";
//import  ContactDetails from './components/ContactInfo'


function App() {
  return (
    
    <Fragment>
      <NavigationBar></NavigationBar>
      <MainContainer>
      
       <Congratulations/>
        
      </MainContainer>
      <Footer/>
    </Fragment>
  );
}

export default App;
