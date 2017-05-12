/**
 * Created by Joy on 2017. 4. 17..
 */
import React, {Component} from 'react';

import Stars from './Stars';

export default class Rating extends Component {
  render() {
    return (
      <div>
        <div className="stars">
          <Stars />
        </div>
        <div className="like">

        </div>
      </div>
    );
  }
}