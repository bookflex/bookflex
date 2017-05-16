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
   }
}

export function fetchLoginAjax(url, sendData){
    return(dispatch, getState) => {
      console.log("here is action");
      console.log(url, sendData);
        const sending = JSON.stringify(sendData);
        console.log(sending);
        // var xhr = new XMLHttpRequest();
        // xhr.open('POST', url);
        // xhr.setRequestHeader("Content-Type", "application/json");
        // xhr.send(sending);

        // xhr.addEventListener("load", function(){
        //     console.log(xhr.responseText);
        // })

        fetch(url, {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json'
          }),
          body: sendData
        }).then(response => {
          console.log(response);
          dispatch({
            type: 'AJAX_LOGIN',
            payload: response
          })
        } )
        console.log("end action"); 
    }
}



