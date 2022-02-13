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
import TheRoutes from "./components/routes";





function App() {
  return (
    
    <Fragment>
      <NavigationBar></NavigationBar>
      <MainContainer>
       <TheRoutes/>
        
      </MainContainer>
      <Footer/>
    </Fragment>
  );
}

export default App;
