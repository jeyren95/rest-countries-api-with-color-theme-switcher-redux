import {combineReducers} from "redux"
import desiredCountryReducer from "./desiredCountryReducer";
import searchedCountryReducer from "./searchedCountryReducer";
import selectedRegionReducer from "./selectedRegionReducer";
import colorModeReducer from "./colorModeReducer";


export default combineReducers({
  desiredCountry: desiredCountryReducer,
  searchedCountry: searchedCountryReducer,
  selectedRegion: selectedRegionReducer,
  colorMode: colorModeReducer
});
