/**
 * Created by Joy on 2017. 4. 17..
 */
import React, {Component} from 'react';

import Rating from './Rating';

export default class Book extends Component {
  render() {

    const { title, description, author,
      coverLargeUrl, isbn, customerReviewRank,
      priceStandard } = this.props.book;

    return (
      <div className="book">
        <div className="title">{title}</div>
        <img src={coverLargeUrl} className="bookImg"/>
        <div className="description">{description}</div>
        <Rating />
      </div>
    );
  }
}
