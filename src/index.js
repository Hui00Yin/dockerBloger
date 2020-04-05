import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import configureStore, {history} from './redux/configureStore';
import { Provider } from 'react-redux';
import {ConnectedRouter} from 'connected-react-router'
import Routes from './routes';
import DevTools from './redux/DevTools';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history = {history}>
      <Routes /> 
      <DevTools />
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
