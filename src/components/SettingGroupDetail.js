import React from 'react'
import { Link } from 'react-router-dom'

class SettingGroupDetail extends React.Component {
  constructor() {
    super()
    
    this.state = {
      searchTerm: '',
      currentlyDisplayed: []
    }
    
    this.onInputChange = this.onInputChange.bind(this)
  } 
  
  componentDidMount() {
    this.props.getSettingGroup(this.props.settingGroupId)
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.groupSettings !== this.props.groupSettings) {
      this.setState({
        currentlyDisplayed: nextProps.groupSettings
      })
    }
  }

  onButtonClick = (regionName, evt) => {
    evt.target.classList.toggle("active")
    this.props.onRegionClick(regionName)
    this.filterSettings()
  } 

  filterSettings = () => {
    let newlyDisplayed = this.props.groupSettings.filter(setting => {
      return this.props.selectedRegions.indexOf(setting.settingValueDetails[0].regionName) > -1 && setting.settingKey.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) > -1
    })
    this.setState({
      currentlyDisplayed: newlyDisplayed
    })
  }
  
  onInputChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    })
    this.filterSettings()
  }

  render() {
    return (
      <div className="col-sm-9">
        <h1 >{this.props.settingGroupName}</h1>
        
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

        <div className="component-panel">
          <h2><a data-toggle="collapse" href="#group">Components</a></h2>
          <div id="group" className="panel-collapse collapse in">
            <div className="panel-body panel panel-default">
              {this.props.settingGroupComponents && this.props.settingGroupComponents.map((platform, i) => {
                return <div key={i}>
                    <h3><Link to={`/platform/detail/${platform.componentId}`}>{platform.componentName}</Link></h3>
                </div>
              })}
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default SettingGroupDetail