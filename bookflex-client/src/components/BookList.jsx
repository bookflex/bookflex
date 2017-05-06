import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, object } from 'prop-types';

import Book from './Book';

const BookList = ({ searchedBookList }) =>
  <div className="bookList">
    {searchedBookList.map(book => <Book key={book.isbn.toString()} book={book} />)}
  </div>
;

function mapStateToProps({ books }) {
  return {
    searchedBookList: books.searchedBookList,
  };
}

BookList.propTypes = {
  searchedBookList: arrayOf(object).isRequired,
};

export default connect(mapStateToProps)(BookList);

