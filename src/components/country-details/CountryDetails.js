import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {searchCountry, inputDesiredCountry} from "../../actions"
import BorderButton from "../border-button/BorderButton";

import "./CountryDetails.css";


const lookup = require("country-code-lookup");

class CountryDetails extends React.Component {
  componentDidMount() {
    if (!this.props.desiredCountry) {
      this.props.inputDesiredCountry(this.props.match.params.country);    //remember that we have to make each component able to work independently of each other
      this.props.searchCountry();                                         //this.props.match.params.country is the prop that was passed down from the App component
                                                                         //it gives us access to the variable ":country" that was typed in by the user in the url
    }
  }

  renderBorderCountries() {
    return this.props.searchedCountry.borders.map((borderCode) => {
      const borderName = lookup.byIso(borderCode).country
      return (
        <BorderButton
        borderName={borderName}
        key={borderName}
        />
      )
    })
  }

  render() {
    if (this.props.searchedCountry) {
      return (
        <div className={this.props.colorMode === "light" ? "country-details" : "country-details darker-mode"}>
          <Link to="/">
            <button
            type="button"
            className={this.props.colorMode === "light" ? "btn btn-outline-dark back-button" : "btn btn-outline-dark back-button dark-mode"}
            >
              <i className="arrow left icon"></i>Back
            </button>
          </Link>
          <div className="row">
            <div className="col-lg-6 country-flag">
              <img src={this.props.searchedCountry.flag} alt="flag"></img>
            </div>

            <div className="col-lg-6 details">
              <div className="name">
                <h1>{this.props.searchedCountry.name}</h1>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <p><span>Native name: </span>{this.props.searchedCountry.nativeName}</p>
                  <p><span>Population: </span>{new Intl.NumberFormat('en-US').format(this.props.searchedCountry.population)}</p>
                  <p><span>Region: </span>{this.props.searchedCountry.region}</p>
                  <p><span>Sub Region: </span>{this.props.searchedCountry.subregion}</p>
                  <p><span>Capital: </span>{this.props.searchedCountry.capital}</p>
                </div>
                <div className="col-lg-6">
                  <p><span>Top Level Domain: </span>{this.props.searchedCountry.topLevelDomain[0]}</p>
                  <p><span>Currencies: </span>{this.props.searchedCountry.currencies[0].name}</p>
                  <p><span>Languages: </span>{this.props.searchedCountry.languages[0].name}</p>
                </div>
              </div>
              <div className="row border-countries">
                <div className="col-lg-3">
                  <span>Border Countries: </span>
                </div>
                <div className="col-lg-9">
                  {this.renderBorderCountries()}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div>
        Loading...
      </div>
    )
  }

}



const mapStateToProps = (state) => {
  return (
    {
      searchedCountry: state.searchedCountry[0],
      desiredCountry: state.desiredCountry,
      colorMode: state.colorMode
    }
  )
}

export default connect(mapStateToProps, {searchCountry, inputDesiredCountry})(CountryDetails);
