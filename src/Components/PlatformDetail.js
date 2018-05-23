import React from 'react'
import axios from 'axios'
import { getAccessToken } from '../AuthService'
import { Link } from 'react-router-dom'
import '../styles/css/PlatformDetail.css'

class PlatformDetail extends React.Component {
  constructor() {
    super()
    
    this.state = {
      searchTerm: '',
    }
    
    this.onInputChange = this.onInputChange.bind(this)
  } 
  
  componentDidMount() {
    this.props.getPlatform(this.props.platformId)
    this.props.getData()
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.componentSettings !== this.props.componentSettings) {
      this.setState({
        currentlyDisplayed: nextProps.componentSettings
      })
    }
  }

  onButtonClick = (regionName, evt) => {
    console.log('button', evt.target)
    evt.target.classList.toggle("active")
    this.props.onRegionClick(regionName)
    this.props.filterOnRegionClick()
  } 
  
  onInputChange = (e) => {
    let newlyDisplayed = this.props.componentSettings.filter(setting => {
      return this.props.selectedRegions.indexOf(setting.settingValueDetails[0].regionName) > -1 && setting.settingKey.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
    })
    this.setState({
      searchTerm: e.target.value,
      currentlyDisplayed: newlyDisplayed
    })
  }

  render() {
    return (
      <div className="col-sm-9">
        <h1 >{this.state.platformName}</h1>
        
        <p>no settings for you</p>

        <h2>Settings</h2>

        <div className="form-inline setting-filters">
            <div className="btn-group" role="group" aria-label="Regions">
                {this.props.regions && this.props.regions.map(region => {
                  let isActive = this.props.selectedRegions.indexOf(region.regionName) >= 0
                  return (
                    <button type="button" className={"btn btn-default" + (isActive ? " active" : "")} key={region.regionId} onClick={(e) => {this.onButtonClick(region.regionName, e)}}>{region.regionName}</button>
                  )
                })}
            </div>
            <div className="form-group">
                <input type="text" className="form-control" name="search" placeholder="Search" onChange={this.onInputChange} />
            </div>
        </div>

        <table className="table settings">
          <thead>
            <tr className="row">
                <th className="col-xs-4">Key</th>
                <th className="col-xs-3">Region</th>
                <th className="col-xs-5">Value</th>
            </tr>
          </thead>
          <tbody>
            {this.state.currentlyDisplayed && this.state.currentlyDisplayed.map((setting, i) => {
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
              {this.props.settingGroups && this.props.settingGroups.map((groupSetting, i) => {
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
                  {this.props.currentSettings && this.props.currentSettings.map((currentSetting,i) => {
                    const settingKeys = Object.keys(currentSetting.settings);
                    return settingKeys.map((settingKey, idx) => {
                      console.log('settingkey', settingKey)
                      console.log('currentsetting.settings', currentSetting.settings)
                      return (
                        <tr className="row" key={settingKey}>
                          <td>{settingKey}</td>
                          <td>{currentSetting.settings[settingKey]}</td>
                        </tr>
                      )
                    }
                      )
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