import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux'
import thunk from 'redux-thunk';

const history = createHistory();

const middleware = routerMiddleware(history);

import './style/index.css';

import reducers from './reducers';

import App from './router';

let store = createStore(
  reducers,
  applyMiddleware(middleware, thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

