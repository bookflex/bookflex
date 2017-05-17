/**
 * Created by Joy on 2017. 5. 10..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import { insertStarPoint } from '../actions';

class Stars extends Component {
  insertStarPoint(evt) {
    const bookId = this.props.bookId;
    const starPoint = evt.target.value;
    this.props.insertStarPoint(bookId, starPoint);
  }

  render() {
    return (
      <div>
        <fieldset className="rating">
          <input type="radio" id="star5" name="rating" value="5" onClick={this.insertStarPoint.bind(this)} /><label className="full" htmlFor="star5" title="Awesome - 5 stars"/>
          <input type="radio" id="star4half" name="rating" value="4.5" onClick={this.insertStarPoint.bind(this)} /><label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"/>
          <input type="radio" id="star4" name="rating" value="4" onClick={this.insertStarPoint.bind(this)} /><label className="full" htmlFor="star4" title="Pretty good - 4 stars"/>
          <input type="radio" id="star3half" name="rating" value="3.5" onClick={this.insertStarPoint.bind(this)} /><label className="half" htmlFor="star3half" title="Meh - 3.5 stars"/>
          <input type="radio" id="star3" name="rating" value="3" onClick={this.insertStarPoint.bind(this)} /><label className="full" htmlFor="star3" title="Meh - 3 stars"/>
          <input type="radio" id="star2half" name="rating" value="2.5" onClick={this.insertStarPoint.bind(this)} /><label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"/>
          <input type="radio" id="star2" name="rating" value="2" onClick={this.insertStarPoint.bind(this)} /><label className="full" htmlFor="star2" title="Kinda bad - 2 stars"/>
          <input type="radio" id="star1half" name="rating" value="1.5" onClick={this.insertStarPoint.bind(this)} /><label className="half" htmlFor="star1half" title="Meh - 1.5 stars"/>
          <input type="radio" id="star1" name="rating" value="1" onClick={this.insertStarPoint.bind(this)} /><label className="full" htmlFor="star1" title="Sucks big time - 1 star"/>
          <input type="radio" id="starhalf" name="rating" value="0.5" onClick={this.insertStarPoint.bind(this)} /><label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"/>
        </fieldset>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    insertStarPoint: (bookId, starPoint) => {
      dispatch(insertStarPoint(bookId, starPoint));
    }
  }
}

export default connect(null, mapDispatchToProps)(Stars);