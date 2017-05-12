/**
 * Created by Joy on 2017. 4. 24..
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchMainPage } from '../actions'
import BestsellerList from '../components/BestsellerList';
import PostList from '../components/PostList';
import GenreList from '../components/GenreList';

class MainPage extends Component {
  componentWillMount() {
    this.props.fetchMainPage();
  }

  render() {
    return (
      <div>
        <BestsellerList />
        <PostList />
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
