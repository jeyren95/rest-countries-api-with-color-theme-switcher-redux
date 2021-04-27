import React from "react";
import {Route, Router} from "react-router-dom";

import Header from "./header/Header";
import Home from "./Home"
import CountryDetails from "./country-details/CountryDetails";

import history from "../history";

class App extends React.Component {

  render() {
    return (
      <Router history={history}>

        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/details/:country" exact component={CountryDetails} />

      </Router>
    )
  }
}


export default App;
