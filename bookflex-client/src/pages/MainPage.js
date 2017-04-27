/**
 * Created by Joy on 2017. 4. 24..
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';

import { fetchData } from '../actions'
import BookList from '../components/BookList';

class MainPage extends Component {

  // componentWillMount() {
  //   this.props.fetchData();
  // }

  render() {
    return (
      <div>
        <BookList />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => {
      dispatch(fetchData());
    }
  }
}

export default connect(null, mapDispatchToProps)(MainPage);
