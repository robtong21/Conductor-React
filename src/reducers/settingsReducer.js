function settingsReducer(state={}, action) {
  const newState = Object.assign({}, state)

  switch(action.type) {
    case 'GET_PLATFORM_DATA':
      newState.componentName = action.platformData.componentName
      newState.settings = action.platformData.componentSettings
      newState.currentSettings = []
      action.platformData.currentSettings.forEach(region => {
        for (var key in region.settings) {
            newState.currentSettings.push({settingKey: key, regionName: region.regionName, settingValue: region.settings[key]})
        }
      });
      newState.settingGroups = action.platformData.settingGroups
      break
    case 'GET_SETTING_GROUP_DATA':
      newState.settingGroupName = action.settingGroupData.settingGroupName
      newState.settings = action.settingGroupData.groupSettings
      newState.settingGroupComponents = action.settingGroupData.associatedComponents
      break
    default:
      return state
  }
  return newState
}

export default settingsReducer