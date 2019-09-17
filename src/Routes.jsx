import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import AppLoader from './components/appLoader/AppLoader';

const Institucional = Loadable({
  loader: () => import('./pages/leanwork/Leanwork'),
  loading: AppLoader,
});

const LeanJobs = Loadable({
  loader: () => import('./pages/leanJobs/LeanJobs'),
  loading: AppLoader,
});

const Routes = () => {

  return (
    <Switch>
      <Route exact path="/" component={(props) => <Institucional {...props} />} />
      <Route path="/institucional" component={(props) => <Institucional {...props} />} />
      <Route exact path="/jobs" component={props => <LeanJobs {...props} />} />
    </Switch>
  );

};

export default Routes;
