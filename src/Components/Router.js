import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
// todo: look up browser history in v4
// import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from '../store'
import LandingPage from '../components/LandingPage'
import PlatformDetailContainer from '../containers/PlatformDetailContainer';
import NotFound from '../components/NotFound';
import { getRegions } from '../action-creators/regions';

class Router extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        {/* <ConnectedRouter history={history} > */}
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/platform/detail/:platformId" render={() => {
              getRegions()
              return <PlatformDetailContainer />
            }} />
            {/* <Route path="/platform/detail/:platformId" component={PlatformDetailContainer} /> */}
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
        {/* </ConnectedRouter> */}
      </Provider>
    )
  }
}

export default Router;
