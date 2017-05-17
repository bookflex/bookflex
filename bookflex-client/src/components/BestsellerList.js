/**
 * Created by Joy on 2017. 4. 19..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import Book from './Book';
import Ranking from '../components/Ranking';

class BestsellerList extends Component {
  render() {
    return (
      <div className="bestsellerList">
        <Ranking />
        <div className="bestsellers">
          {this.props.bestsellerBookList.map((book, index) => {
            return (
              <Book key={index} book={book}/>
            )})}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bestsellerBookList: state.books.bestsellerBookList
  };
}

export default connect(mapStateToProps)(BestsellerList);