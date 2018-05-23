function settingGroupReducer(state={}, action) {
  const newState = Object.assign({}, state)

  switch(action.type) {
    case 'GET_SETTING_GROUP_DATA':
      newState.settingGroupName = action.settingGroupData.settingGroupName
      newState.groupSettings = action.settingGroupData.groupSettings
      newState.settingGroupComponents = action.settingGroupData.associatedComponents
      newState.selectedGroupSettings = action.settingGroupData.groupSettings
      break
    default:
      return state
  }
  return newState
}

export default settingGroupReducer