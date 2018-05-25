import { getAccessToken } from '../AuthService'
import axios from 'axios'

export const getSettingGroupSettings = settingGroupData => ({
  type: 'GET_SETTING_GROUP_DATA',
  settingGroupData
})

export const getSettingGroup = (groupId) => {
  return (dispatch, getState, api) => {
    axios.get(`${api.environmentURL}/administration/v1/settings/groups/${groupId}`)
    .then(res => {
      console.log('setting group settings', res)
      dispatch(getSettingGroupSettings(res.data))
    })
    .catch(err => console.log(err))
  }
}