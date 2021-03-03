//the first reducer that i want is probably the term reducer
//the initial state of the term is blank, which is before the user inputs anything
//and if the action creator is called, whereby the user inputs something, then the state of the term changes
//if the action creator is not called, then the state of the term does not change at all

export default (state = "", action) => {
  switch(action.type) {
    case "INPUT_DESIRED_COUNTRY":
      return action.payload
    case "CLICK_BORDER_COUNTRY":
      return action.payload
    case "CLICK_DESIRED_COUNTRY":
      return action.payload
    default:
      return state
  }
}
