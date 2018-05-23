import { getAccessToken } from '../AuthService'
import axios from 'axios'

export const getPlatformSettings = platformData => ({
  type: 'GET_PLATFORM_DATA',
  platformData
})

export const filterPlatformSettings = (selectedRegions) => ({
  type: 'FILTER_PLATFORM_SETTINGS',
  selectedRegions
})

export const getPlatform = (platformId) => {
  const accessToken = getAccessToken()
  const AuthStr = 'Bearer '.concat(accessToken);
  const self = this;
  return (dispatch, getState, api) => {
    axios.get(`${api.environmentURL}/administration/v1/settings/components/${platformId}`, { headers: { Authorization: AuthStr}})
  .then(res => {
    console.log('settings res', res)
    dispatch(getPlatformSettings(res.data))
  })
  .catch(err => console.log(err))
  }
}

export const filterOnRegionClick = () => {
  return (dispatch, getState) => {
    const state =  getState()
    dispatch(filterPlatformSettings(state.regionsReducer.selectedRegions))
  }
}