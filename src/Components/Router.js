import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// todo: look up browser history in v4
// import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import LandingPage from '../components/LandingPage'
import PlatformDetailContainer from '../containers/PlatformDetailContainer';
import SettingGroupContainer from '../containers/SettingGroupContainer';
import NotFound from '../components/NotFound';
import EnsureLoggedInContainer from '../containers/EnsureLoggedInContainer';

import { isLoggedIn } from '../AuthService';
// import { logIn } from '../action-creators/auth'

class Router extends React.Component {
  render() {
    console.log('isloggedin', isloggedin)
    let isLoggedIn = isLoggedIn()
    if (isLoggedIn) {
      return (
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={LandingPage} />
  
              <Route component={EnsureLoggedInContainer}>
                <Route path="/platform/detail/:platformId" component={PlatformDetailContainer} />
                <Route path="/settingGroup/detail/:settingGroupId" component={SettingGroupContainer} />
              </Route>
              
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
      )
    } else {
      return (
        <React.Fragment>
          <LandingPage />
          <button className="btn btn-default" onClick={this.initAuthState} type="submit">Log In</button>
        </React.Fragment>
      )
    }
  }
}

export default Router;
