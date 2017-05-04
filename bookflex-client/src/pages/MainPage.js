/**
 * Created by Joy on 2017. 4. 24..
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';

import { fetchMainPage } from '../actions'
import BestsellerList from '../components/BestsellerList';

class MainPage extends Component {

  componentWillMount() {
    this.props.fetchMainPage();
  }

  render() {
    return (
      <div>
        <BestsellerList />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchMainPage: () => {
      dispatch(fetchMainPage());
    }
  }
}

export default connect(null, mapDispatchToProps)(MainPage);
