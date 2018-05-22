function regionsReducer(state={}, action) {
  const newState = Object.assign({}, state)
  switch(action.type) {
    case 'GET_REGIONS':
      newState.regions = action.regions
      break
    default:
      return state
  }
  return newState
}

export default regionsReducer