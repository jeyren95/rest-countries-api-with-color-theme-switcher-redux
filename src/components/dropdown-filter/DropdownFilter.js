import React from "react";
import {connect} from "react-redux";

import "./DropdownFilter.css";
import {selectRegion} from "../../actions";

class DropdownFilter extends React.Component {
  renderRegions() {
    const regions =  ["Africa", "Americas", "Asia", "Europe", "Oceania"]

    return regions.map((region) => {
      return (
        <button
        key={region}
        value={region}
        onClick={(e) => this.props.selectRegion(e.target.value)}
        type="button"
        className={this.props.colorMode === "light" ? "dropdown-item" : "dropdown-item dark-mode"}
        >
        {region}
        </button>
      );
    })
  }

  render() {
    return (
      <div className="dropdown-filter">
        <button
        className={this.props.colorMode === "light" ? "btn dropdown-toggle" : "btn dropdown-toggle dark-mode"}
        type="button" id="dropdownMenu"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        >
          Filter by Region
        </button>
        <div className={this.props.colorMode === "light" ? "dropdown-menu" : "dropdown-menu dark-mode"} aria-labelledby="dropdownMenu">
          {this.renderRegions()}
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

export default connect(mapStateToProps, {selectRegion: selectRegion})(DropdownFilter);
