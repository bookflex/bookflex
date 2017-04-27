import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';

import './style/index.css';
import reducers from './reducers/'

import book from './book.json'

import App from './router';

let store = createStore(
  reducers,
  applyMiddleware(thunk)
);


const bookData = book;
console.log(bookData);

const element = bookData.map( (v,i) => {
  return <li key={i} className="Tab-list">{v.title}</li>
})

ReactDOM.render(


  <Provider store={store}>
   <App />
    
  </Provider>
  ,document.getElementById('root')
);