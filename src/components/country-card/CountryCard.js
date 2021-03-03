import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux"

import {clickDesiredCountry, searchCountry} from "../../actions";


import "./CountryCard.css";



class CountryCard extends React.Component {
  handleClick = () => {
    this.props.clickDesiredCountry(this.props.name)
    this.props.searchCountry()
  }

  render() {
    return(
      <div className="col-lg-3 col-sm-4 each-country">
        <Link style={{textDecoration: "none", color: "#111517"}}>
          <div
          className={this.props.colorMode === "light" ? "card" : "card dark-mode"}
          type="button"
          onClick={this.handleClick}
          >
            <img src={this.props.flag} className="card-img-top" alt={this.props.name} ></img>
            <div className="card-body">
              <h5 className="card-title">{this.props.name}</h5>
              <p className="card-text"><span>Population:</span> {new Intl.NumberFormat('en-US').format(this.props.population)}</p>
              <p className="card-text"><span>Region:</span> {this.props.region}</p>
              <p className="card-text"><span>Capital:</span> {this.props.capital}</p>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    colorMode: state.colorMode
  })
}

export default connect(mapStateToProps, {clickDesiredCountry, searchCountry})(CountryCard)
