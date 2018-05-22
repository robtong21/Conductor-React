import { getAccessToken } from '../AuthService'
import axios from 'axios'

export const getRegionsList = regions => ({
  type: 'GET_REGIONS',
  regions
})

export const getRegions = () => {
  const accessToken = getAccessToken()
  const AuthStr = 'Bearer '.concat(accessToken);
  // const self = this;
  return dispatch => {
    axios.get(`${this.state.environmentURL}/administration/v1/settings/home`, { headers: { Authorization: AuthStr}})
    .then(res => {
      dispatch(getRegionsList(res.data.regions))
    })
  }
}