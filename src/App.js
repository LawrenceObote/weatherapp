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
                  <Link to="/"></Link>
                </li>
              </ul>
            </nav>
          </div>
        </Router>
    )
}