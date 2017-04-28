/**
 * Created by hwigyum on 2017. 4. 27..
 */
import React, {Component} from 'react';

import Rating from './Rating';

export default class Rank extends Component {
  render() {
    // console.log(this.props.rank);
    // const { title, description, author,
    //   coverLargeUrl, isbn, customerReviewRank,
    //   priceStandard } = this.props.book;

    return (
      <div className="rank">
          rank
        {/*<div className="title">{title}</div>
        <img src={coverLargeUrl} className="bookImg"/>
        <div className="description">{description}</div>
        <Rating />*/}
      </div>
    );
  }
}
