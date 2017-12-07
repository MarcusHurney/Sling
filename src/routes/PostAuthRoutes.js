import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import PostAuthRoutes
import UserRoutes from './UserRoutes';

// import containers & components
import PostAuthNavbarContainer from '../view/Navigation/containers/PostAuthNavbarContainer';
import Home from '../view/Home/components/Home'; // this should be the first authorized screen

const PostAuthRoutes = ({ match }) => (
  <div className="primary-layout">
    <PostAuthNavbarContainer />
    <main>
      <Switch>
        <Route path={`${match.path}`} exact component={Home} />
        <Route path={`${match.path}/users`} component={UserRoutes} />
        <Redirect to={`${match.url}`} />
      </Switch>
    </main>
  </div>
);

export default PostAuthRoutes;
