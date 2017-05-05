import React from 'react';
import PropTypes from 'prop-types';

import Rating from './Rating';

const Book = ({ book }) => {
  // author, isbn, customerReviewRank, priceStandard
  const { title, description, coverLargeUrl } = book;

  return (
    <div className="book col-md-3">
      <div className="cover">
        <div className="Img">
          <img src={coverLargeUrl} className="bookImg" alt="bookImage" />
        </div>
        <div className="title">{title}</div>
        <p className="description">{description}</p>
        <Rating />
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Book;
