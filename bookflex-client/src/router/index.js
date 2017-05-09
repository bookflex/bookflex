/**
 * Created by Joy on 2017. 4. 24..
 */
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import TabList from '../components/TabList';
import MainPage from '../pages/MainPage';
import RecommendationPage from '../pages/RecommendationPage';
import Ranking from '../components/Ranking';
import PostList from '../components/PostList';


const App = () => (
  <Router>
    <div>
<<<<<<< HEAD
      <TabList />
=======
      <TabList/>
      <Ranking />
      <PostList />
>>>>>>> develop
      <Route exact path="/" component={MainPage}/>
      <Route path="/recommendations" component={RecommendationPage}/>
    </div>
  </Router>
);

export default App;