import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/css/PlatformDetail.css'
import SettingsTableContainer from '../containers/SettingsTableContainer';
import CurrentSettingsTableContainer from '../containers/CurrentSettingsTableContainer';

class PlatformDetail extends React.Component {
  
  componentDidMount() {
    this.props.getPlatform(this.props.platformId)
  }
  
  render() {
    return (
      <div className="col-sm-9">
        <h1 >{this.props.platformName}</h1>
        
          
            <div className="settings-panel">
              <h2><a data-toggle="collapse" href="#settings">Settings</a></h2>
              <div id="settings" className="panel-collapse collapse in">
                <div className="panel-body panel panel-default">
                <SettingsTableContainer />
                </div>
              </div>
            </div>

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
                <CurrentSettingsTableContainer />
                </div>
              </div>
            </div>

      </div>

    )
  }
}

export default PlatformDetail