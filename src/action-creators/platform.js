import { getAccessToken } from '../AuthService'
import axios from 'axios'

export const getPlatformSettings = platformData => ({
  type: 'GET_PLATFORM_DATA',
  platformData
})

export const getPlatform = (platformId) => {
  const accessToken = getAccessToken()
  const AuthStr = 'Bearer '.concat(accessToken);
  return (dispatch, getState, api) => {
    axios.get(`${api.environmentURL}/administration/v1/settings/components/${platformId}`, { headers: { Authorization: AuthStr}})
    .then(res => {
      dispatch(getPlatformSettings(res.data))
    })
    .catch(err => console.log(err))
  }
}