/**
 * Created by Joy on 2017. 4. 17..
 */
import React, { Component } from 'react';

import Tab from './Tab';

export default class TabList extends Component {
  render() {
    return (
      <div className="tabList">
        <Tab link="/" name="Main" />
      </div>
    );
  }
}