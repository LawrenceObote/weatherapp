import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     
    };
  }

  async fiveDay () {
    try{
      let url = "http://api.openweathermap.org/data/2.5/weather?q=Burlington&units=metric&APPID=143a8ef26c89c530c8c2eff7d7c9e6d6";
      let url2 = "http://api.openweathermap.org/data/2.5/weather?id=6424355&appid=143a8ef26c89c530c8c2eff7d7c9e6d6";


      const fiveDay = await axios.get(url2);
      console.log("adseascd", fiveDay);
    } catch(e) {
      console.error(e);
    }
  }

  async daily () {

  }



    render() {
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
              {/* <FiveDay /> */}
            </Route>
            <Route path="/[name-of-day]">
               {/* <Daily /> */}
            </Route>
          </Switch>
        </Router>
      )
}
    componentDidMount() {
      this.fiveDay();
      
;    }

}

export default App;