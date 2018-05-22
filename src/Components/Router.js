import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// todo: look up browser history in v4
// import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import LandingPage from '../components/LandingPage'
import PlatformDetailContainer from '../containers/PlatformDetailContainer';
import NotFound from '../components/NotFound';

class Router extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            {/* <Route path="/platform/detail/:platformId" render={() => {
              getRegions()
              return <PlatformDetailContainer />
            }} /> */}
            <Route path="/platform/detail/:platformId" component={PlatformDetailContainer} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
    )
  }
}

export default Router;
