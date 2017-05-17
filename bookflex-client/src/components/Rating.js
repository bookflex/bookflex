/**
 * Created by Joy on 2017. 4. 17..
 */
import React, {Component} from 'react';

import Stars from './Stars';

export default class Rating extends Component {
  render() {
    const bookId = this.props.bookId;
    return (
      <div>
        <div className="title">
          {this.props.bookTitle}
        </div>
        <div className="stars">
          <Stars bookId={bookId} />
        </div>
        <div className="like">

        </div>
      </div>
    );
  }
}