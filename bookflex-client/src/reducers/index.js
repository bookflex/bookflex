/**
 * Created by Joy on 2017. 4. 24..
 */
import { combineReducers } from 'redux';
import BookReducer from './books.reducer';
import PostReducer from './posts.reducer.js';

const rootReducer = combineReducers({
  books: BookReducer,
  posts: PostReducer
});

export default rootReducer;