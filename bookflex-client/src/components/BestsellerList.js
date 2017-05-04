/**
 * Created by Joy on 2017. 4. 19..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import Book from './Book';

class BestsellerList extends Component {
  render() {
    return (
      <div className="bestsellerList">
        {/*추후 ranking component 넣기*/}
        <div className="books">
          {this.props.bestsellerBookList.map((book) => {
            return (
              <Book key={book.isbn} book={book}/>
            )
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bestsellerBookList: state.bestseller.bestsellerBookList
  };
}


export default connect(mapStateToProps)(BestsellerList);