import React from "react";
import {connect} from "react-redux";
import {applyDarkMode, applyLightMode} from "../../actions";


import "./Header.css"

class Header extends React.Component {
  render() {
    return (
        <div className={this.props.colorMode === "light" ? "header": "header dark-mode"}>
          <div className="row">
            <div className="col-7">

              <h2>Where in the world?</h2>


            </div>
            <div className="col-5">
              <p onClick={() => this.props.colorMode === "light" ? this.props.applyDarkMode() : this.props.applyLightMode()} type="button">
                <i className={this.props.colorMode === "light" ? "ui icon moon outline" : "ui icon moon"}></i>Dark Mode
              </p>
            </div>
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

export default connect(mapStateToProps, {applyDarkMode, applyLightMode})(Header)
