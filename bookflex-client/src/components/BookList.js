/**
 * Created by Joy on 2017. 4. 17..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import Book from './Book';

class BookList extends Component {
  render() {
    return (
      <div className="bookList">
        {this.props.searchedBookList.map((book) => {
          return (
            <Book key={book.isbn} book={book} />
          )
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchedBookList: state.books.searchedBookList
  };
}

export default connect(mapStateToProps)(BookList);

