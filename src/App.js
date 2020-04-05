import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function App() {
    return(
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">5 Day Forecast</Link>
                </li>
                <li>
                  <Link to="/[name-of-day]">Day</Link>
                </li>
              </ul>
            </nav>
          </div>

          <Switch>
            <Route path="/">
              <FiveDay />
            </Route>
            <Route path="/[name-of-day]">
               <Day />
            </Route>
          </Switch>
        </Router>
    );
}

function FiveDay() {
  return <h1>Five Day Forecast</h1>;
}

function Hourly() {
  return <h1>Hourly Forecast for</h1>;
}