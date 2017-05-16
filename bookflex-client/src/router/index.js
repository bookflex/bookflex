/**
 * Created by Joy on 2017. 4. 24..
 */
import React from 'react';
import {Route} from 'react-router-dom';

import TabList from '../components/TabList';
import MainPage from '../pages/MainPage';
import RecommendationPage from '../pages/RecommendationPage';
import SearchResultPage from '../pages/SearchResultPage';
import Login from '../components/Login';

const App = () => (
  <div>
    <TabList />
    <Route exact path="/" component={MainPage}/>
    <Route path="/recommendations" component={RecommendationPage}/>
    <Route path="/searchResultPage" component={SearchResultPage}/>
    <Route path="/login" component={Login}/>
  </div>
);

export default App;