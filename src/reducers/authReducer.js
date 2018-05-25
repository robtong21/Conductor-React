function authReducer(state={}, action) {
  const newState = Object.assign({}, state)

  switch(action.type) {
    case 'SET_REDIRECT_URL':
      newState.currentUrl = action.currentUrl
      break
    case 'NAVIGATE_TO':
      newState.redirectUrl = action.redirectUrl
      break
    case 'LOG_IN':
      newState.isLoggedIn = action.isLoggedIn
      break
    default:
      return state
  }
  return newState
}

export default authReducer