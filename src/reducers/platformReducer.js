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
    default:
      return state
  }
  return newState
}

export default platformReducer