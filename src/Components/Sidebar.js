import React from 'react'
import '../styles/css/Sidebar.css'

class Sidebar extends React.Component {

  render() {
    return (
      <div id="side-nav" className="col-sm-3">
        <h2><a href={`/`}>Home</a></h2>
        <h2>Platforms</h2>
        <ul>
          {this.props.platforms && this.props.platforms.slice().sort((a,b) => {
            return a.componentName.localeCompare(b.componentName)
          }).map(platform =>
            <li key={platform.componentId}><a href={`/platform/detail/${platform.componentId}`}>{platform.componentName}</a></li>
          )}
        </ul>
        <h2>Setting Groups</h2>
        <ul>
          {this.props.settingGroups && this.props.settingGroups.slice().sort((a,b) => {
            return a.settingGroupName.localeCompare(b.settingGroupName)
          }).map(group =>
            <li key={group.settingGroupID}><a href={`/settingGroup/detail/${group.settingGroupID}`}>{group.settingGroupName}</a></li>
          )}
        </ul>
      </div>
    )
  }
}

export default Sidebar