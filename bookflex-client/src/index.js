import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import thunk from 'redux-thunk';

import './style/index.css';
import './style/post.css';
import reducers from './reducers';

import App from './router';

const history = createHistory();

const middleware = routerMiddleware(history);

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
/* eslint-enable */

const enhancer = composeEnhancers(
  applyMiddleware(thunk, middleware),
  // other store enhancers if any
);

// let store = createStore(
//   reducers,
//   applyMiddleware(middleware, thunk)
// );

const store = createStore(
  reducers,
  enhancer
);

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
/* eslint-disable react/jsx-filename-extension */
