/**
 * Created by hwigyum on 2017. 4. 27..
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Rank from './Rank';
import { getBestSeller } from './../actions'

import '../style/Ranking.css';

class Ranking extends Component {
  render() {
    //베스트셀러 API 호춢
    debugger;
    this.props.getBestSeller();
    const temp = this.props.bestsellerBookList;
    debugger;

    console.log(temp);
    return (
      <div className="rankList">
        rankList
        <Rank />
        {/*{this.props.bestsellerBookList.map((rank) => {
          return (
            <Rank key={rank.isbn} rank={rank} className="rank" />
          )
        })}*/}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getBestSeller: () => {
      dispatch(getBestSeller());
    }
  }
}

// export default connect(null, mapDispatchToProps)(Ranking);

function mapStateToProps(state) {
  return {
    bestsellerBookList: state.bestseller.bestsellerBookList
  };
}

// export default connect(mapStateToProps)(Rank);

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);