import { getAccessToken } from '../AuthService'
import axios from 'axios'

export const getRegionsList = regions => ({
  type: 'GET_REGIONS',
  regions
})

export const getPlatformList = platforms => ({
  type: 'GET_PLATFORMS',
  platforms
})

export const getSettingGroupsList = settingGroups => ({
  type: 'GET_SETTING_GROUPS',
  settingGroups
})

export const setDevPlatformEnvUrl = () => ({
  type: 'SET_DEV_PLATFORM_ENV_URL',
  environmentURL: 'http://devplatform.rightnow.org'
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

export const getData = () => {
  const accessToken = getAccessToken()
  const AuthStr = 'Bearer '.concat(accessToken);
  return (dispatch, getState, api) => {
    axios.get(`${api.environmentURL}/administration/v1/settings/home`, { headers: { Authorization: AuthStr}})
    .then(res => {
      console.log('res', res)
      dispatch(getRegionsList(res.data.regions))
      dispatch(getPlatformList(res.data.components))
      dispatch(getSettingGroupsList(res.data.groups))
    })
  }
}