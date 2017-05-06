import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, object } from 'prop-types';

import Book from './Book';
import Ranking from '../components/Ranking';

const BestsellerList = ({ bestsellerBookList }) =>
  <div className="bestsellerList">
    <Ranking />
    <div className="bestsellers">
      {bestsellerBookList.map(book => <Book key={book.isbn} book={book} />)}
    </div>
  </div>
;

function mapStateToProps({ books }) {
  return {
    bestsellerBookList: books.bestsellerBookList,
  };
}

BestsellerList.propTypes = {
  bestsellerBookList: arrayOf(object).isRequired,
};

export default connect(mapStateToProps)(BestsellerList);
