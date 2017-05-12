/**
 * Created by Joy on 2017. 4. 26..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import { searchBook } from '../actions'

class SearchBar extends Component {
  onKeyDown(evt) {
    if(evt.keyCode === 13) {
      this.props.searchBook(evt.target.value);
    }
  }

  render() {
    return (
      <div className="searchBar">
        <input type="text" onKeyDown={this.onKeyDown.bind(this)} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchBook: (bookTitle) => {
      dispatch(searchBook(bookTitle));
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchBar);

