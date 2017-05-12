/**
 * Created by hwigyum on 2017. 4. 27..
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Rank from './Rank';
import { fetchBestseller } from './../actions'

import '../style/Ranking.css';

class Ranking extends Component {

  componentWillMount() {
    this.props.fetchBestseller();
  }

  render() {
    return (
      <div className="rankList">
        <ol>
          {this.props.bestsellerBookList.map((bestseller)=>{
            return(
              <Rank key={bestseller.rank} bestseller={bestseller} />
            )
          })}
        </ol>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBestseller: () => {
      dispatch(fetchBestseller());
    }
  }
}

function mapStateToProps(state) {
  return {
    bestsellerBookList: state.books.bestsellerBookList
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);