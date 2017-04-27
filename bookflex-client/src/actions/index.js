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
      .then(json => dispatch({
          type: 'SEARCHED_BOOKS',
          payload: json.item
        }));

  }
}

export const onClickTab = (key) => {
  return {
    type: "CLICK_TAB",
    key: key
  };
};



