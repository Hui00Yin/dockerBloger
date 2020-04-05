import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import {createBrowserHistory} from 'history'
import {connectRouter, routerMiddleware} from 'connected-react-router'

import createFetchMiddleware from './redux-composable-fetch-index';
import ThunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import DevTools from './DevTools';

const FetchMiddleware = createFetchMiddleware({
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

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  ...rootReducer,
})

export default function configureStore(initialState) {
  const store = finalCreateStore(createRootReducer(history), initialState);

  return store;
}
