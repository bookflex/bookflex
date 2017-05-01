/**
 * Created by hwigyum on 2017. 4. 27..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import Rating from './Rating';

class Rank extends Component {
  render() {
    // debugger;
    const {title} = this.props.bestseller;

    return (
      <div className="rank">
        <li>{title}</li>
        {/*<div className="title">{title}</div>
        <img src={coverLargeUrl} className="bookImg"/>
        <div className="description">{description}</div>
        <Rating />*/}
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     bestsellerBookList: state.bestseller.bestsellerBookList
//   };
// }

// export default connect(mapStateToProps)(Rank);