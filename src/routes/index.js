import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import routes
import LandingPage from '../view/Home/components/LandingPage';
import EnsureAuth from './EnsureAuth';
import PreAuthRoutes from './PreAuthRoutes';
import PostAuthRoutes from './PostAuthRoutes';

const NotFound = () => (
  <div style={{ height: '100vh', width: '100vw' }}>
    <p>404 bruh</p>
  </div>
);

export default () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/404" exact component={NotFound} />
    <Route path="/auth" component={PreAuthRoutes} />
    <EnsureAuth path="/app" component={PostAuthRoutes} />
    <Redirect to="/404" />
  </Switch>
);
