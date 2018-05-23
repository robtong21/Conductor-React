function environmentReducer(state={}, action) {
  const newState = Object.assign({}, state)
  switch(action.type) {
    case 'SET_DEV_PLATFORM_ENV_URL':
      newState.environmentURL = action.environmentURL
      break
    default:
      return state
  }
  return newState
}

export default environmentReducer