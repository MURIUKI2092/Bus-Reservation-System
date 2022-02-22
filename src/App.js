import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./style.css";
import "./App.css";
import NavigationBar from "./components/navbar";
import Footer from "./components/footer";
import MainContainer from "./containers/main";
import ProfileHeader from './components/profileHeader';

import { routes } from "./routes";
<<<<<<< HEAD
import EditableDetails from "./components/editable";
=======
import { useRoutes } from "react-router-dom";
import { isLoggedIn } from "./utils/auth";
>>>>>>> df3d904c55c42a099f901e2f5ece3226c7a80b15

const App = (props) => {
  console.log(`Logged is ${isLoggedIn()}`)
  const routing = useRoutes(routes(isLoggedIn()));

  return (
    <Fragment>
      <NavigationBar />
<<<<<<< HEAD
      <MainContainer>
          {/* <Routes>
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
          </Routes> */}
          <EditableDetails/>
      </MainContainer>
=======
      <MainContainer>{routing}</MainContainer>
>>>>>>> df3d904c55c42a099f901e2f5ece3226c7a80b15
      <Footer />
    </Fragment>
  );
};

export default App;
