import React from 'react';
import './App.css';
import Auth from './components/Auth'
import Router from './components/Router';
import { getAccessToken, isLoggedIn } from './AuthService'
import axios from 'axios'
import './styles/css/Sidebar.css'
import { Provider, connect } from 'react-redux'
import store, { env } from './store'
import { getData } from './action-creators/data'
import SidebarContainer from './containers/SidebarContainer';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import PlatformDetailContainer from './containers/PlatformDetailContainer';
import SettingGroupContainer from './containers/SettingGroupContainer';
import NotFound from './components/NotFound';

class App extends React.Component {
  constructor(props) {
    super(props)

    axios.defaults.headers.common['Authorization'] = 'Bearer '.concat(getAccessToken())
  } 
  
  getData = () => {
    axios.get(`${env.environmentURL}/administration/v1/settings/home`)
    .then(res => {
      store.dispatch(getData(res.data))
    })
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      <React.Fragment>
        <Auth />
        <SidebarContainer />
        <main>
          <Route exact path="/" component={LandingPage} />

          <Route path="/platform/detail/:platformId" component={PlatformDetailContainer} />
          <Route path="/settingGroup/detail/:settingGroupId" component={SettingGroupContainer} />
          
          <Route component={NotFound} />
        </main>
      </React.Fragment>

      // <Provider store={store}>
      //   <React.Fragment>
      //     <Auth />
      //     <SidebarContainer />
      //     <Router />
      //   </React.Fragment>
      // </Provider>
    );
  }
}

export default App