/**
 * Created by Joy on 2017. 4. 27..
 */
import React, { Component } from 'react';

import BookList from '../components/BookList';

export default class SearchResultPage extends Component {
  render() {
    console.log('SearchResultPage');
    return (
      <div>
        <BookList />
      </div>
    );
  }
}