import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
// import store from './store';
import Landing from './landing';
import TicketForm from './TicketForm';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={TicketForm} />
      <Route path="/home" component={TicketForm} />
      <Route path="/payment" component={Landing} />
    </Switch>
  </Router>
);

export default Routes;
