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

    // console.log(temp);
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
    getBestSeller: () => {
      dispatch(getBestSeller());
    }
  }
}

function mapStateToProps(state) {
  return {
    bestsellerBookList: state.bestseller.bestsellerBookList
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);