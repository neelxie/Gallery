import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
// import * as serviceWorker from './serviceWorker';
import { saveState } from './localStorage';
import Routes from './App';
import './index.css';

// update localstorage whenever state changes
store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>, document.getElementById('root'));