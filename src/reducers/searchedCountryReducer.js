export default (state = [], action) => {
  switch(action.type) {
    case "SEARCH_COUNTRY":
      return action.payload
    default:
      return state
  }
}
