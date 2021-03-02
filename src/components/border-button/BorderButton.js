import React from "react";
import {connect} from "react-redux";

import {clickBorderCountry, searchCountry} from "../../actions";

import "./BorderButton.css";


class BorderButton extends React.Component {

  handleClick = () => {
    this.props.clickBorderCountry(this.props.borderName);
    this.props.searchCountry(this.props.desiredCountry);
  }

  render() {
    return (
      <button
      className= {this.props.colorMode === "light" ? "border-button btn btn-outline-dark" : "border-button btn btn-outline-dark dark-mode"}
      type="button"
      onClick = {this.handleClick}
      >
        {this.props.borderName}
      </button>
    )
  }
}


const mapStateToProps = (state) => {
  return ({
    colorMode: state.colorMode,
    desiredCountry: state.desiredCountry
  })
}

export default connect(mapStateToProps, {clickBorderCountry, searchCountry})(BorderButton)
