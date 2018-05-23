function regionsReducer(state={}, action) {
  const newState = Object.assign({}, state)

  switch(action.type) {
    case 'GET_REGIONS':
      newState.regions = action.regions
      newState.selectedRegions = action.regions.map(region => {
        return region.regionName;
      })
      break
    case 'CLICK_REGION':
      let index = state.selectedRegions.indexOf(action.region)
      index < 0 ? newState.selectedRegions.push(action.region) : newState.selectedRegions.splice(index, 1)
      break
    default:
      return state
  }
  console.log('newstate in regionsReducer', newState)
  return newState
}

export default regionsReducer