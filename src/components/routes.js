import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from "../containers/landing";
import SignIn from "../containers/SignIn";
import SignUp from "../containers/SignUp";


const TheRoutes=()=>{
    return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact  path="login" element={<SignIn />}/>
        <Route exact path="register" element={<SignUp/>} />
          
       
      </Routes>
    </BrowserRouter>
      
        


    );
}
export default TheRoutes