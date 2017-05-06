import React from 'react';
import { objectOf, string } from 'prop-types';

const Rank = ({ bestseller }) =>
  <div className="rank">
    <li><a href={bestseller.link}>{bestseller.title}</a></li>
  </div>
;

Rank.propTypes = {
  bestseller: objectOf(string).isRequired,
};

export default Rank;
