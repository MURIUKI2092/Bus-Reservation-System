import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import SignUp from "./containers/SignUp"
import SignIn from './containers/SignIn';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/signin">Signin</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/signup" element={<SignUp />} />            
          <Route path="/signin" element={<SignIn />} />            
        </Routes>
      </div>
    </Router>
  );
}

export default App;
