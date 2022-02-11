import React from "react"
import {
  BrowserRouter as Router,
  /* Routes,
  Route,
  Link */
} from "react-router-dom";
import './style.css';
import './App.css';
/* import SignUp from "./containers/SignUp"
import SignIn from './containers/SignIn'; */
import NavigationBar from "./components/navbar";
import Footer from "./components/footer";
import MainContainer from "./containers/main";

function App() {
  return (
    
    <Router>
      <NavigationBar></NavigationBar>
      <MainContainer>

      </MainContainer>
      <Footer/>
    </Router>
  );
}

export default App;
