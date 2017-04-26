/**
 * Created by Joy on 2017. 4. 19..
 */
import React, {Component} from 'react';

import Book from './Book';
import Ranking from './Ranking';

export default class BestsellerList extends Component {
  render() {
    return (
      <div>
        <Ranking limit={this.props.limit}/>
        <Book />
      </div>
    );
  }
}