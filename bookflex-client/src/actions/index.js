/**
 * Created by Joy on 2017. 4. 17..
 */
import fetchJsonp from 'fetch-jsonp';

import config from '../config';

export const fetchBook = () => {
  return (dispatch, getState) => {

  }
};

export function searchBook(bookTitle) {
  return (dispatch, getState) => {
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

export const onClickTab = (key) => {
  return {
    type: "CLICK_TAB",
    key: key
  };
};



