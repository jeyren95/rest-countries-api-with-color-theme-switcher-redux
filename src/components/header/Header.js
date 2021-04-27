import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom"
import {applyDarkMode, applyLightMode} from "../../actions";

import "./Header.css"

class Header extends React.Component {
  handleClick = () => {
    if (this.props.colorMode === "light") {
      this.props.applyDarkMode()
      document.querySelector("body").style.backgroundColor = "#202c37"
    } else if (this.props.colorMode === "dark") {
      this.props.applyLightMode()
      document.querySelector("body").style.backgroundColor = "#fafafa"
    }
  }

  render() {
    return (
        <div className={this.props.colorMode === "light" ? "header": "header dark-mode"}>
          <div className="row">
            <div className="col-7">
              <Link style={{color: "#111517", textDecoration: "none"}} to="/">
                <h2>Where in the world?</h2>
              </Link>
            </div>
            <div className="col-5">
              <p onClick={this.handleClick} type="button">
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
