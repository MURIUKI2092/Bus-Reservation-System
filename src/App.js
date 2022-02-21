import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./style.css";
import "./App.css";
import NavigationBar from "./components/navbar";
import Footer from "./components/footer";
import MainContainer from "./containers/main";
import { routes } from "./routes";
import { useRoutes } from "react-router-dom";
import { isLoggedIn } from "./utils/auth";

const App = (props) => {
  console.log(`Logged is ${isLoggedIn()}`)
  const routing = useRoutes(routes(isLoggedIn()));

  return (
    <Fragment>
      <NavigationBar />
      <MainContainer>{routing}</MainContainer>
      <Footer />
    </Fragment>
  );
};

export default App;
