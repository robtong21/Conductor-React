function platformReducer(state={}, action) {
  const newState = Object.assign({}, state)

  switch(action.type) {
    case 'GET_PLATFORM_DATA':
      newState.componentName = action.platformData.componentName
      newState.componentSettings = action.platformData.componentSettings
      newState.currentSettings = action.platformData.currentSettings
      newState.settingGroups = action.platformData.settingGroups
      newState.selectedComponentSettings = action.platformData.componentSettings
      break
    case 'FILTER_PLATFORM_SETTINGS':
      if (state.componentSettings) {
        newState.selectedComponentSettings = state.componentSettings.filter(setting => {
          return action.selectedRegions.indexOf(setting.settingValueDetails[0].regionName) > -1
        })
      }  
      break
    default:
      return state
  }
  return newState
}

export default platformReducer