export default (state="light", action) => {
  switch(action.type) {
    case "APPLY_DARK_MODE":
      return state="dark"
    case "APPLY_LIGHT_MODE":
      return state="light"
    default:
      return state
  }
}
