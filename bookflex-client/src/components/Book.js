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
      <div className="book col-md-3">
        <div className="cover">
          <div className="Img">
            <img src={coverLargeUrl} className="bookImg"/>
          </div>
          <div className="title">{title}</div>
          <p className="description">{description}</p>
          <Rating />
        </div>
      </div>
    );
  }
}
