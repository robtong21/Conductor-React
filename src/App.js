import React from 'react';
import './App.css';
import Auth from './components/Auth'
import Sidebar from './components/Sidebar';
import Router from './components/Router';
// import { getAccessToken } from './AuthService'
// import axios from 'axios'
import './styles/css/Sidebar.css'
import { Provider } from 'react-redux'
import store from './store'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      baseUrl: '',
      config: '',
      groups: [],
      platforms: [],
      regions: [],
      environmentURL: 'http://devplatform.rightnow.org',
    }
  } 
  
//   getHomeData = () => {
//     const accessToken = getAccessToken()
//     const AuthStr = 'Bearer '.concat(accessToken);
//     const self = this;
//     axios.get(`${this.state.environmentURL}/administration/v1/settings/home`, { headers: { Authorization: AuthStr}})
//     .then(res => {
//       self.setState({
//         groups: res.data.groups,
//         platforms: res.data.components,
//         regions: res.data.regions
//       })
//     }
//   )
//   .catch(err => console.log(err))
// }

render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Auth />
          <Sidebar 
            getHomeData={this.getHomeData} 
            platforms={this.state.platforms} 
          />
          <Router />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
