import React from 'react'
import axios from 'axios'
import { getAccessToken } from '../AuthService'
import { Link } from 'react-router-dom'
import '../styles/css/PlatformDetail.css'

class PlatformDetail extends React.Component {
  constructor() {
    super()

    this.state = {
      baseUrl: '',
      config: '',
      componentSettings: [],
      platform: '',
      regions: [],
      environmentURL: 'http://devplatform.rightnow.org'
    }
  } 

  componentDidMount() {
    this.getPlatform()
  }
  
  getPlatform = () => {
    const platformID = this.props.match.params.platformId
    const accessToken = getAccessToken()
    const AuthStr = 'Bearer '.concat(accessToken);
    const self = this;
    axios.get(`${this.state.environmentURL}/administration/v1/settings/components/${platformID}`, { headers: { Authorization: AuthStr}})
      .then(res => {
        console.log('res', res)
        const regions = res.data.componentSettings.settingValueDetails.map()
        self.setState({
          platformName: res.data.componentName,
          settings: res.data.componentSettings,
          groupSettings: res.data.settingGroups,
          currentSettings: res.data.currentSettings,
        })
      })
      .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div className="col-sm-9">
        <h1 >{this.state.platformName}</h1>

        <p>no settings for you</p>

        <div className="form-inline setting-filters">
            <div className="btn-group" role="group" aria-label="Regions">

                <button type="button" className="btn btn-default"></button>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" name="search" placeholder="Search" />
            </div>
        </div>

        <h2>Settings</h2>

        <table className="table settings">
          <thead>
            <tr className="row">
                <th className="col-xs-4">Key</th>
                <th className="col-xs-3">Region</th>
                <th className="col-xs-5">Value</th>
            </tr>
          </thead>
          <tbody>
            {this.state.settings && this.state.settings.map((setting, i) => {
              return <tr className="row" key={i}>
                <td className="col-xs-4">{setting.settingKey}</td>
                <td className="col-xs-3">{setting.settingValueDetails[0].regionName}</td>
                <td className="col-xs-5">{setting.settingValueDetails[0].settingValue}</td>
              </tr>
            })}
          </tbody>
        </table>

        <div className="group-panel">
          <h2><a data-toggle="collapse" href="#group">Group Settings</a></h2>
          <div id="group" className="panel-collapse collapse in">
            <div className="panel-body panel panel-default">
              {this.state.groupSettings && this.state.groupSettings.map((groupSetting, i) => {
                return <div key={i}>
                    <h3><Link to={`/settingGroup/detail/${groupSetting.settingGroupID}`}>{groupSetting.settingGroupName}</Link></h3>
                </div>
              })}
            </div>
          </div>
        </div>

        <div className="current-panel">
          <h2><a data-toggle="collapse" href="#current">Current Settings</a></h2>
          <div id="current" className="panel-collapse collapse in">
            <div className="panel-body panel panel-default">
              <table className="table settings">
                <thead>
                  <tr className="row">
                      <th className="col-sm-6">Key</th>
                      <th className="col-sm-6">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.currentSettings && this.state.currentSettings.map((currentSetting,i) => {
                    const settingKeys = Object.keys(currentSetting.settings);
                    return <tr className="row" key={i}>
                      {settingKeys.map((settingKey, idx) => 
                      <React.Fragment key={idx}>
                        <td>{settingKey}</td>
                        <td>{currentSetting.settings[settingKey]}</td>
                      </React.Fragment>
                      )}
                    </tr>
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PlatformDetail