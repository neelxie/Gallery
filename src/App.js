import React from 'react';
import { toast } from 'react-toastify';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import { Router } from 'react-router';

import Landing from './landing';
import TicketForm from './TicketForm';

import 'react-toastify/dist/ReactToastify.css';
import history from './utils/history';
// import logo from './img/Logo2.png';


export default function App() {

  toast.configure({
    autoClose: 10000,
    draggable: false,
    position: toast.POSITION.TOP_RIGHT,
  });
  
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={TicketForm} />
          <Route path="/home" component={TicketForm} />
          <Route path="/payment" component={Landing} />
        </Switch>
      </Router>     
    </div>
  );
}