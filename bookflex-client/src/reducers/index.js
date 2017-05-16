/**
 * Created by Joy on 2017. 4. 24..
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import BookReducer from './books.reducer';
import PostReducer from './posts.reducer';
import SignReducer from './signs.reducer';

const rootReducer = combineReducers({
  router: routerReducer,
  books: BookReducer,
  posts: PostReducer,
  signs: SignReducer
});

export default rootReducer;