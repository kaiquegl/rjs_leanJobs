import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import AppLoader from './components/appLoader/AppLoader';

const HomePage = Loadable({
  loader: () => import('./pages/home/Home'),
  loading: AppLoader,
});

const LeanJobs = Loadable({
  loader: () => import('./pages/leanJobs/LeanJobs'),
  loading: AppLoader,
});

const Routes = () => {

  return (
    <Switch>
      <Route exact path="/" component={props => <HomePage {...props} />} />
      <Route exact path="/jobs" component={props => <LeanJobs {...props} />} />
    </Switch>
  );

};

export default Routes;
