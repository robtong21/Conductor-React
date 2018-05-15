import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './Components/Auth'
import Sidebar from './Components/Sidebar';
import Router from './Components/Router';
import LandingPage from './Components/LandingPage';
import { getAccessToken } from './AuthService'
import axios from 'axios'
import './styles/css/Sidebar.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      baseUrl: '',
      config: '',
      groups: [],
      platforms: [],
      regions: [],
      environmentURL: 'http://devplatform.rightnow.org'
    }
  } 
  
  getHomeData = () => {
    const accessToken = getAccessToken()
    const AuthStr = 'Bearer '.concat(accessToken);
    const self = this;
    axios.get(`${this.state.environmentURL}/administration/v1/settings/home`, { headers: { Authorization: AuthStr}})
    .then(res => {
      self.setState({
        groups: res.data.groups,
        platforms: res.data.components,
        regions: res.data.regions
      })
    }
  )
  .catch(err => console.log(err))
}

render() {
    return (
      <React.Fragment>
        
        <Auth />
        <Sidebar 
          getHomeData={this.getHomeData} 
          platforms={this.state.platforms} 
        />
        <Router />
      </React.Fragment>
    );
  }
}

export default App;
