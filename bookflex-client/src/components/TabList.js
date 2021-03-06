/**
 * Created by Joy on 2017. 4. 17..
 */
import React, { Component } from 'react';
import Modal from './Modal'
import Tab from './Tab';
import SearchBar from './SearchBar';

export default class TabList extends Component {
  render() {
    return (
      <div className="tabList">
        <Tab link="/" name="Main" />
        <Tab link="/recommendations" name="Recommendations" />
        <SearchBar />
        {/*<Tab link="/login" name="Login" />*/}
        <Modal />
      </div>
    );
  }
}