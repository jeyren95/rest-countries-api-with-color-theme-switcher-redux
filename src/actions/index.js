//the first action i would want is when the user inputs the term in the search bar, and i want to return that term
//the second action i would want is when the user submits the form, and i want to make an api request to REST countries
import countries from "../apis/countries";
import history from "../history"

export const inputDesiredCountry = (country) => {
  return ({
    type: "INPUT_DESIRED_COUNTRY",
    payload: country
  });
}

export const clickDesiredCountry = (country) => {
  return ({
    type: "CLICK_DESIRED_COUNTRY",
    payload: country
  })
}

export const clickBorderCountry = (borderCountry) => {
  return ({
    type: "CLICK_BORDER_COUNTRY",
    payload: borderCountry
  })
}

export const searchCountry = () => {
  return async(dispatch, getState) => {
    const response = await countries.get(`/name/${getState().desiredCountry}`)
    dispatch({type: "SEARCH_COUNTRY", payload: response.data})
    history.push(`/details/${getState().desiredCountry}`)
  }
}

export const selectRegion = (region) => {
  return async(dispatch) => {
    const response = await countries.get(`/region/${region}`)
    dispatch({type: "SELECT_REGION", payload: response.data})
  }
}


export const applyDarkMode = () => {
  return ({
    type: "APPLY_DARK_MODE"
  })
}

export const applyLightMode = () => {
  return ({
    type: "APPLY_LIGHT_MODE"
  })
}
