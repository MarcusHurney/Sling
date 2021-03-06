import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import PreAuthRoutes Components
import LoginContainer from '../view/Login/containers/LoginContainer';
import OnboardingContainer from '../view/Onboarding/containers/OnboardingContainer';

const PreAuthRoutes = () => (
  <div className="unauthorized-layout">
    {/*

    Imagine this could be a general layout for all unauthorized pages like
    the login page, forgot password, email-verified, etc...

    For this example project, we'll just have a Login Page

    */}
    <Switch>
      <Route path="/auth/login" component={LoginContainer} />
      <Route path="/auth/onboarding" component={OnboardingContainer} />
      <Redirect to="/auth/login" />
    </Switch>
  </div>
);

export default PreAuthRoutes;
