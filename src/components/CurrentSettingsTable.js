import React from 'react'

class CurrentSettingsTable extends React.Component {
  constructor() {
    super()
    
    this.state = {
      searchTerm: '',
      selectedRegion: ''
    }
    
    this.onInputChange = this.onInputChange.bind(this)
  } 
  
  componentDidUpdate(prevProps) {
    if (prevProps.regions !== this.props.regions) {
      this.setState({
        selectedRegion: this.props.regions[0].regionName
      })
    }
    if (prevProps.currentSettings !== this.props.currentSettings) {
      this.setState({
        currentlyDisplayed: this.props.currentSettings
      })
      this.filterSettings(this.state.selectedRegion)
    }
  }

  toggleRegion = (regionName, btn) => {
    let buttons = document.querySelectorAll('.current-settings')
    Array.from(buttons).forEach(button => {
      button.classList.remove("active")
    })
    this.setState({
      selectedRegion: regionName
    })
    btn.classList.add("active")
  }

  onButtonClick = (regionName, e) => {
    this.toggleRegion(regionName, e.target)
    this.filterSettings(regionName)
  } 

  filterSettings = (regionName) => {
    let newlyDisplayed = this.props.currentSettings.filter(setting => {
      return regionName === setting.regionName
       && setting.settingKey.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) > -1
    })
    this.setState({
      currentlyDisplayed: newlyDisplayed
    })
  }
  
  onInputChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    })
    this.filterSettings(this.state.selectedRegion)
  }

  render() {
    return (
      <React.Fragment>
        {this.state.currentlyDisplayed && this.state.currentlyDisplayed.length > 0 ?
        <div>
          <div className="form-inline setting-filters">
            <div className="btn-group" role="group" aria-label="Regions">
                {this.props.regions && this.props.regions.map(region => {
                  let isActive = this.state.selectedRegion.indexOf(region.regionName) >= 0
                  return (
                    <button type="button" className={"btn btn-default current-settings" + (isActive ? " active" : "")} key={region.regionId} onClick={(e) => {this.onButtonClick(region.regionName, e)}}>{region.regionName}</button>
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
                  <th className="col-sm-6">Key</th>
                  <th className="col-sm-6">Value</th>
              </tr>
            </thead>
            <tbody>
              {this.state.currentlyDisplayed && this.state.currentlyDisplayed.map((setting, idx) => {
                return <tr className="row" key={setting.settingKey}>
                    <td>{setting.settingKey}</td>
                    <td>{setting.settingValue}</td>
                  </tr>
              })}
            </tbody>
          </table>
        </div>
        : "no settings for you" }
    </React.Fragment>
    )
  }
}

export default CurrentSettingsTable