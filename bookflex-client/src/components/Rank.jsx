import React from 'react';
import PropTypes from 'prop-types';

const { objectOf, string } = PropTypes;

const Rank = ({ bestseller }) =>
  <div className="rank">
    <li><a href={bestseller.link}>{bestseller.title}</a></li>
  </div>
;

Rank.propTypes = {
  bestseller: objectOf(string).isRequired,
};

export default Rank;
