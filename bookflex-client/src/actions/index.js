/**
 * Created by Joy on 2017. 4. 17..
 */
import { push } from 'react-router-redux';
import fetchJsonp from 'fetch-jsonp';

import config from '../config';

export function searchBook(bookTitle) {
  return (dispatch, getState) => {
    // go to recommendation page
    dispatch(push('/searchResultPage'));
    const url = `${config.BOOK_API_URI}?key=${config.BOOK_API_KEY}&query=${bookTitle}&output=json&maxResults=100`;

    fetchJsonp(url)
      .then(response => response.json())
      .then(json => {
        // draw screen
        dispatch({
          type: 'SEARCHED_BOOKS',
          payload: json.item
        });

        // insert db
        fetch('http://localhost:3001/books/', {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json'
          }),
          body: JSON.stringify(json.item)
        })
      });
  }
}

export function fetchBestseller() {
  return (dispatch, getState) => {
    const url = `${config.BESTSELLER_API_URI}?key=${config.BOOK_API_KEY}&categoryId=100&output=json`;

    fetchJsonp(url)
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'BESTSELLER_BOOKS',
          payload: json.item
        });
      })
  }
}

export function fetchMainPage() {
  return (dispatch) => {
    dispatch(fetchBestseller());
    dispatch(fetchPost());
  };
}

export const onClickTab = (key) => {
  return {
    type: "CLICK_TAB",
    key: key
  };
};

export function fetchPost() {
  return (dispatch, getState) => {
    fetch('http://localhost:3001/posts/')
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'BESTSELLER_POSTS',
          payload: json
        })
      })
  };
}

export function insertStarPoint(bookId, starPoint) {
  return (dispatch, getState) => {
    dispatch({
      type: 'STAR_POINT',
      payload: starPoint
    });

    fetch('http://localhost:3001/books/stars', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({ bookId: bookId, starPoint: starPoint })
    })
  };
}

export function registerUser(email, password) {
  return (dispatch, getState) => {
    fetch('http://localhost:3001/register/user', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({ email: email, password: password })
    }).then(response => response.json())
  };
}