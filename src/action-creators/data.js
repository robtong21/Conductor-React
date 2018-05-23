export const getData = data => ({
  type: 'GET_DATA',
  data
})

export const getPlatformList = platforms => ({
  type: 'GET_PLATFORMS',
  platforms
})

export const getSettingGroupsList = settingGroups => ({
  type: 'GET_SETTING_GROUPS',
  settingGroups
})

export const selectRegion = region => ({
  type: 'CLICK_REGION',
  region
})

export const onRegionClick = regionName => {
  return dispatch => {
    dispatch(selectRegion(regionName))
  }
}
