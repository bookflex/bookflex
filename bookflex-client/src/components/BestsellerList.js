/**
 * Created by Joy on 2017. 4. 19..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import Book from './Book';
import Ranking from '../components/Ranking';

class BestsellerList extends Component {
  constructor(props){
    super(props);
  }
  
  render() {

    return (
      <div className="row justify-content-center BestsellerList">
        
        <div className="col-md-3"><Ranking /></div>
        <div className="bestsellers col-md-9">
          {this.props.bestsellerBookList.slice(0,8).map((book, index) => {
            return (
              <Book key={index} book={book} useKey={index}/>
            )})}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bestsellerBookList: state.books.bestsellerBookList
  };
}

export default connect(mapStateToProps)(BestsellerList);