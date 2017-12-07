import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import UsersIndexContainer from '../view/Users/containers/UsersIndexContainer';
import UserProfileShowContainer from '../view/Users/containers/UserProfileShowContainer';

const UserSubLayout = ({ match }) => (
  <div className="user-sub-layout">
    <aside>
      <UserNav />
    </aside>
    <div className="primary-content">
      <Switch>
        <Route path={match.path} exact component={UsersIndexContainer} />
        <Route
          path={`${match.path}/:userId`}
          component={UserProfileShowContainer}
        />
      </Switch>
    </div>
  </div>
);

export default UserSubLayout;
