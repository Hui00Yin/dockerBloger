import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import {createBrowserHistory} from 'history'
import {connectRouter, routerMiddleware} from 'connected-react-router'

import createFetchMiddleware from 'redux-composable-fetch';
import ThunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import DevTools from './DevTools';

const FetchMiddleware = createFetchMiddleware({
  beforeFetch(){
    console.log("Hey it's at beforeFetch");
  },
  afterFetch({ action, result }) {
    return result.json().then(data => {
      return Promise.resolve({
        action,
        result: data,
      });
    });
  },
});

export const history = createBrowserHistory()

const finalCreateStore = compose(
  applyMiddleware(ThunkMiddleware, FetchMiddleware, routerMiddleware(history)),
  DevTools.instrument()
)(createStore);

const reducer = connectRouter(history)(rootReducer)

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState);

  return store;
}
