import React from 'react'
import { Link } from 'react-router-dom'
import SettingsTableContainer from '../containers/SettingsTableContainer';

class SettingGroupDetail extends React.Component {
    
  componentDidMount() {
    this.props.getSettingGroup(this.props.settingGroupId)
  }

  render() {
    return (
      <div className="col-sm-9">
        <h1 >{this.props.settingGroupName}</h1>
        
        <p>no settings for you</p>

        <h2>Settings</h2>

        <SettingsTableContainer />

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