/**
 * Created by Joy on 2017. 4. 24..
 */
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import TabList from '../components/TabList';
import MainPage from '../pages/MainPage';
import RecommendationPage from '../pages/RecommendationPage';




const App = () => (
  <Router>
    <div>
      <TabList/>
      <Route exact path="/" component={MainPage}/>
      <Route path="/recommendations" component={RecommendationPage}/>
    </div>
  </Router>
);

export default App;