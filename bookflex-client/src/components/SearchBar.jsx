import React from 'react';
import { connect } from 'react-redux';

import { searchBook } from '../actions';

const SearchBar = () => {
  const onKeyDown = (evt) => {
    if (evt.keyCode === 13) {
      this.props.searchBook(evt.target.value);
    }
  };

  return (
    <div className="searchBar">
      <input type="text" onKeyDown={onKeyDown} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    searchBook: (bookTitle) => {
      dispatch(searchBook(bookTitle));
    },
  };
}

export default connect(null, mapDispatchToProps)(SearchBar);
