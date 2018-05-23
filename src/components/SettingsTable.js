import React from 'react'

class SettingsTable extends React.Component {
  constructor() {
    super()
    
    this.state = {
      searchTerm: '',
    }
    
    this.onInputChange = this.onInputChange.bind(this)
  } 
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.settings !== this.props.settings) {
      this.setState({
        currentlyDisplayed: nextProps.settings
      })
    }
  }

  onButtonClick = (regionName, evt) => {
    evt.target.classList.toggle("active")
    this.props.onRegionClick(regionName)
    this.filterSettings()
  } 

  filterSettings = () => {
    let newlyDisplayed = this.props.settings.filter(setting => {
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
      <div className="multi">
      {this.state.currentlyDisplayed && this.state.currentlyDisplayed.length > 0 ? 
        <div>
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
      </div>
      : "no settings for you" }
    </div>
    )
  }
}

export default SettingsTable