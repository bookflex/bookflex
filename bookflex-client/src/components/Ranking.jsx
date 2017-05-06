import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object } from 'prop-types';

import { fetchBestseller } from './../actions';
import '../style/Ranking.css';

class Ranking extends Component {
  componentWillMount() {
    // this.props.fetchBestseller();
  }

  render() {
    return (
      <div className="rankList">
        <ol>
          {this.props.bestsellerBookList.map(bestseller =>
            <li className="rank" key={bestseller.rank}><a href={bestseller.link}>{bestseller.title}</a></li>,
          )}
        </ol>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBestseller: () => {
      dispatch(fetchBestseller());
    },
  };
}

function mapStateToProps(state) {
  return {
    bestsellerBookList: state.books.bestsellerBookList,
  };
}

Ranking.propTypes = {
  bestsellerBookList: arrayOf(object).isRequired,
  // fetchBestseller: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
