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
        </Router>
    )
}