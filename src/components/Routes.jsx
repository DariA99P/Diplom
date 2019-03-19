import React from 'react';

import Loadable from 'react-loadable';
import { Switch, Route } from 'react-router-dom';
import Loader from 'components/shared/loader';

const Welcome = Loadable({
  loader: () => import('components/pages/welcome'),
  loading: Loader,
});

const NotFound = Loadable({
  loader: () => import('components/pages/notFound'),
  loading: Loader,
});

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
