import React from 'react'
import '../styles/css/Sidebar.css'

class Sidebar extends React.Component {

  componentDidMount() {
    // this.props.getHomeData()
  }



  render() {
    return (
      <div id="side-nav" className="col-sm-3">
        <h2>Platforms</h2>
        <ul>
          {this.props.platforms && this.props.platforms.map(platform =>
            // console.log('platform', platform) 
            <li key={platform.componentId}><a href={`/platform/detail/${platform.componentId}`}>{platform.componentName}</a></li>
          )}
        </ul>
      </div>
    )
  }
}

export default Sidebar