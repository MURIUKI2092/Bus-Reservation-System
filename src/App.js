import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./style.css";
import "./App.css";
import NavigationBar from "./components/navbar";
import Footer from "./components/footer";
import MainContainer from "./containers/main";
import { routes } from "./routes";

const App = (props) => {
  return (
    <Fragment>
      <NavigationBar />
      <MainContainer>
          <Routes>
            {routes.map((route) => {
              return (
                <Route
                  exact={route.exact}
                  path={route.path}
                  key={route.path}
                  element={route.component}
                />
              );
            })}
          </Routes>
      </MainContainer>
      <Footer />
    </Fragment>
  );
};

export default App;
