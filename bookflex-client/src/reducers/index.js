/**
 * Created by Joy on 2017. 4. 24..
 */
import { combineReducers } from 'redux';
import BookReducer from './books.reducer';
import BestsellerReducer from './bestseller.reducer';
import PostReducer from './posts.reducer.js';

const rootReducer = combineReducers({
  books: BookReducer,
  bestseller: BestsellerReducer,
  posts: PostReducer
});

export default rootReducer;