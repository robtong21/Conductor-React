import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import PlatformDetail from './PlatformDetail';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/platform/:platformId" component={PlatformDetail} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router;