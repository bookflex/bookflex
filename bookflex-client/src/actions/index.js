import fetchJsonp from 'fetch-jsonp';

import config from '../config';

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

export const fetchGenre = () =>
  (dispatch) => {
    dispatch({
      type: 'Genre',
      payload: [{
        id: 1,
        title: '장르',
        coverUrl: 'http://monthly.chosun.com/upload/1405/1405_074.jpg',
      }],
    });
  };

export function fetchMainPage() {
  return (dispatch) => {
    dispatch(fetchGenre());
    dispatch(fetchBestseller());
  };
}

export const onClickTab = (key) => {
  return {
    type: "CLICK_TAB",
    key: key
  };
};

