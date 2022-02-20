import LandingPage from "../containers/landing";
import SignUp from "../containers/SignUp";
import Signin from "../containers/SignIn";

const routes = [
    {
        path: "/",
        name: 'Landingpage',
        component: <LandingPage/>,
        exact: true,
    },
    {
        path: "/signup",
        name: 'Signup',
        component: <SignUp />,
        exact: true,
    },
    {
        path: "/signin",
        name: "Signin",
        component: <Signin />
    },
]

export default routes;
