import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import flights from '../features/flights/reducers';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    flights,
  });

// Create history
export const history = createBrowserHistory();

const preloadedState = {};

const store = createStore(
  createRootReducer(history),
  preloadedState,
  composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
);
export default store;
