import LandingPage from "../containers/landing";
import SignUp from "../containers/SignUp";
import Signin from "../containers/SignIn";
import { Navigate } from 'react-router-dom';
import Logout  from "../containers/Logout";


const routes = (isLoggedIn) => [
  {
    path: "/",
    name: "Landingpage",
    element: isLoggedIn ? <LandingPage /> : <Navigate to="/signin" />,
    exact: true,
  },
  {
    path: "/signup",
    name: "Signup",
    element: <SignUp />,
    exact: true,
  },
  {
    path: "/signin",
    name: "Signin",
    element: <Signin />,
    exact: true,
  },
  {
      path: "/logout",
      name: "Logout",
      element: <Logout />,
      exact: true,
  }
];

export default routes;
