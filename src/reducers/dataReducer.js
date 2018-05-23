function regionsReducer(state={}, action) {
  const newState = Object.assign({}, state)

  switch(action.type) {
    case 'GET_DATA':
      newState.regions = action.data.regions
      newState.selectedRegions = action.data.regions.map(region => {
        return region.regionName;
      })
      newState.platforms = action.data.components
      newState.settingGroups = action.data.groups
      break
    case 'CLICK_REGION':
      let index = state.selectedRegions.indexOf(action.region)
      index < 0 ? newState.selectedRegions.push(action.region) : newState.selectedRegions.splice(index, 1)
      break
    default:
      return state
  }
  return newState
}

export default regionsReducer