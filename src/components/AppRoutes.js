import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './NoMatch';
import AppTabs from './AppTabs';
import FlightResults from '../features/flights/FlightResults';
import SortBy from '../features/flights/SortBy';
import FilterBy from '../features/flights/FilterBy';

const AppRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <AppTabs />
      </Route>
      <Route exact path="/:page">
        <AppTabs />
      </Route>
      <Route path="/flight/results/sort-by">
        <SortBy />
      </Route>
      <Route path="/flight/results/filter-by">
        <FilterBy />
      </Route>
      <Route path="/flight/results">
        <FlightResults />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  </Router>
);
export default AppRoutes;
