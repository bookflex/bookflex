/**
 * Created by hwigyum on 2017. 4. 27..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import Rank from './Rank';

import './Ranking.css';

class Ranking extends Component {
  render() {
    return (
      <div className="rankList">
        rankList
        <Rank />
      </div>
    );
  }
}


export default Ranking;

