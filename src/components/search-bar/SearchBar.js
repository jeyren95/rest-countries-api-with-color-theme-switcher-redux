import React from "react";
import {connect} from "react-redux";
import {inputDesiredCountry, searchCountry} from "../../actions"

import "./SearchBar.css";

class SearchBar extends React.Component {
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.searchCountry();
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onFormSubmit}>
          <i className={this.props.colorMode==="light" ? "ui icon search" : "ui icon search dark-mode"}></i>
          <input
          className={this.props.colorMode === "light" ? "" : "dark-mode"}
          type="text"
          placeholder="Search for a country..."
          value={this.props.desiredCountry}
          onChange={(e) => this.props.inputDesiredCountry(e.target.value)}
          />
        </form>
      </div>
    )
  }
}

//so in this case, the first state that i want is the state of the term, and whether the user has input any term or not
//the action that i want is when the user inputs a term, the state of my term changes, and then this changed term is passed as a prop to the component

//the second action that i want is when the user submits the form, whereby an API request will be made to REST countries
//after which, the state of selectedCountry will change

const mapStateToProps = (state) => {
  return ({
    desiredCountry: state.desiredCountry,
    colorMode: state.colorMode
  })
}

//connect function communicates with the Provider component to retrieve all the state of the app
//mapStateToProps then helps to map the state as props, which can be used by the current component
//connect function also helps to pass the action creator to the child component
//when the action creator is called, the action is returned, and passed to the reducer via the the dispatcher to update the state
//the state is then again passed as props to the child component
export default connect(mapStateToProps, {inputDesiredCountry,searchCountry})(SearchBar);
