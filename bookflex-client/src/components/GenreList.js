// import React from 'react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object } from 'prop-types';

import Genre from './Genre';

class GenreList extends Component {
  render({ genreList }) {
    return(
      <div className="genreList">
        {genreList.map(genre => <Genre key={genre.id.toString()} genre={genre} />)}
      </div>
    );
  }
}

// const GenreList = ({ genreList }) =>
//   <div className="genreList">
//     {genreList.map(genre => <Genre key={genre.id.toString()} genre={genre} />)}
//   </div>
// ;

function mapStateToProps({ genre }) {
  return {
    genreList: genre.genreList
  };
}

GenreList.propTypes = {
  genreList: arrayOf(object).isRequired
};

export default connect(mapStateToProps)(GenreList);
