import React, { Component } from 'react';
import {connect} from 'react-redux';

import { fetchMainPage } from '../actions'
import BestsellerList from '../components/BestsellerList';
import GenreList from '../components/GenreList';

class MainPage extends Component {

  componentWillMount() {
    this.props.fetchMainPage();
  }

  render() {
    return (
      <div>
        <BestsellerList />
        {/* must attach PostList and GenreList*/}
        <GenreList />
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
