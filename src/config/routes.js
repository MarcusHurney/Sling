import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CommonContainer from '../view/Common/containers/CommonContainer';

const publicPath = '/';

export const routeCodes = {
  COMMON: publicPath,
  OTHER: `${publicPath}other`
};

export default () => (
  <Switch>
    <Route exact path={routeCodes.COMMON} component={CommonContainer} />
  </Switch>
);
