import React from 'react'
import axios from 'axios'
import { getAccessToken } from '../AuthService'

class PlatformDetail extends React.Component {
  constructor() {
    super()

    this.state = {
      baseUrl: '',
      config: '',
      groups: [],
      platform: '',
      regions: [],
      environmentURL: 'http://devplatform.rightnow.org'
    }
  } 

  getPlatform = (platformId) => {
    const accessToken = getAccessToken()
    const AuthStr = 'Bearer '.concat(accessToken);
    const self = this;
    axios.get(`${this.state.environmentURL}/administration/v1/settings/components/${platformId}`, { headers: { Authorization: AuthStr}})
      .then(res => {
        console.log('res', res)
        // self.setState({
        //   groups: res.data.groups,
        //   platform: res.data.components,
        //   regions: res.data.regions
        // })
      })
      .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div>
        {/* <h1 >{tplatform.name}</h1>

        <p>no settings for you</p>

        <div class="form-inline setting-filters">
            <div class="btn-group" role="group" aria-label="Regions">
                <button type="button" onClick="regionClick(e)" className="btn btn-default">{e}</button>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" name="search" placeholder="Search" />
            </div>
        </div>

        <h2>Settings</h2>

        <table class="table settings">
            <thead>
              <tr class="row">
                  <th class="col-xs-4">Key</th>
                  <th class="col-xs-3">Region</th>
                  <th class="col-xs-5">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="row">
                  <td class="col-xs-4">{setting.key}</td>
                  <td class="col-xs-3">{setting.regionName}</td>
                  <td class="col-xs-5">{setting.value}</td>
              </tr>
            </tbody>
          </table> */}
      </div>
    )
  }
}

export default PlatformDetail