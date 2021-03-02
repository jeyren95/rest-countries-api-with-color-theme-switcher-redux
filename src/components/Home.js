import React from "react";
import {connect} from "react-redux"

import "./Home.css";
import SearchBar from "./search-bar/SearchBar";
import DropdownFilter from "./dropdown-filter/DropdownFilter";
import CountriesInSelectedRegion from "./countries-in-selected-region/CountriesInSelectedRegion";

class Home extends React.Component {


  render() {
    return (
    <div className={this.props.colorMode === "light" ? "home": "home darker-mode"}>
      <div className="row search-or-filter">
        <div className="col-lg-6">
          <SearchBar />
        </div>
        <div className="col-lg-6">
          <DropdownFilter />
        </div>
      </div>
      <div>
        <CountriesInSelectedRegion />
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    colorMode: state.colorMode
  })
}

export default connect(mapStateToProps, null)(Home);
