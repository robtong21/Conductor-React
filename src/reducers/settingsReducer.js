function settingsReducer(state={}, action) {
  const newState = Object.assign({}, state)

  switch(action.type) {
    case 'GET_PLATFORM_DATA':
      newState.componentName = action.platformData.componentName
      newState.settings = []
      action.platformData.componentSettings.forEach(key => {
        key.settingValueDetails.forEach(detail => {
            newState.settings.push({settingKey: key.settingKey, region: detail.regionName, regionID: detail.regionID, settingValue: detail.settingValue})
        })
    });
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
      newState.settings = []
      action.settingGroupData.groupSettings.forEach(key => {
        key.settingValueDetails.forEach(detail => {
            newState.settings.push({settingKey: key.settingKey, region: detail.regionName, regionID: detail.regionID, settingValue: detail.settingValue})
        })
      })
      newState.settingGroupComponents = action.settingGroupData.associatedComponents
      break
    default:
      return state
  }
  return newState
}

export default settingsReducer