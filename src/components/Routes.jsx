import React from 'react';

import Loadable from 'react-loadable';
import { Switch, Route } from 'react-router-dom';
import Loader from './shared/loader';

const Welcome = Loadable({
  loader: () => import('./pages/welcome'),
  loading: Loader,
});

const NotFound = Loadable({
  loader: () => import('./pages/notFound'),
  loading: Loader,
});

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
