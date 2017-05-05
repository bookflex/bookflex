import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Book from './Book';

const { arrayOf, object } = PropTypes;

const BookList = ({ searchedBookList }) =>
  <div className="bookList">
    {searchedBookList.map(book => <Book key={book.isbn} book={book} />)}
  </div>
;

function mapStateToProps(state) {
  return {
    searchedBookList: state.books.searchedBookList,
  };
}

BookList.propTypes = {
  searchedBookList: arrayOf(object).isRequired,
};

export default connect(mapStateToProps)(BookList);

