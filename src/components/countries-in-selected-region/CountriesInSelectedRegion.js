import React from "react";
import {connect} from "react-redux";

import CountryCard from "../country-card/CountryCard";
import "./CountriesInSelectedRegion.css"

class CountriesInSelectedRegion extends React.Component {
  renderCountries() {
    return this.props.selectedRegion.map((country) => {
      return (
        <CountryCard
        key = {country.name}
        flag = {country.flag}
        name = {country.name}
        population = {country.population}
        region = {country.region}
        capital = {country.capital}
        />
      )
    })
  }

  render() {
    return (
      <div className="countries-in-selected-region row">
        {this.renderCountries()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    selectedRegion: state.selectedRegion
  })
}

export default connect(mapStateToProps)(CountriesInSelectedRegion);
