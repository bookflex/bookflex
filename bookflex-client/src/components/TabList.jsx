import React from 'react';

import Tab from './Tab';
import SearchBar from './SearchBar';

const TabList = () =>
  <div className="tabList">
    <Tab link="/" name="Main" />
    <Tab link="/recommendations" name="Recommendations" />
    <SearchBar />
  </div>
;

export default TabList;
