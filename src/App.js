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
     high: null
    };
  }

  async fiveDay () {
    try{
      const url2 = "http://api.openweathermap.org/data/2.5/weather?id=6424355&appid=143a8ef26c89c530c8c2eff7d7c9e6d6";


      const fiveDay = await axios.get(url2);
      this.setState({high: fiveDay.data.main.temp_max});
      console.log("vvvv", fiveDay);
    } catch(e) {
      console.error(e);
    }
  }

  async daily () {
    try{
      const url = "http://api.openweathermap.org/data/2.5/forecast?id=6424355&appid=143a8ef26c89c530c8c2eff7d7c9e6d6";
      

      const daily = await axios.get(url);
      console.log( "aaaa", daily);
      this.setState({low: daily.data.main.temp_min});
    }catch(e) {
      console.error(e);
    }
  }

  

  componentDidMount() {
    this.fiveDay();
    this.daily();
    
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
                  <Link to="/daily" >Day</Link>
                </li>
              </ul>
            </nav>
            <h1>{this.state.high}</h1>

          </div>

          <Switch>
            <Route path="/">
              {/* <FiveDay /> */}
            </Route>
            <Route path="/daily">
               {this.state.high}
            </Route>
          </Switch>
        </Router>
      )
}


  

}

export default App;