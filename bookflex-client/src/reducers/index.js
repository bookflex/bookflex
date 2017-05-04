/**
 * Created by Joy on 2017. 4. 24..
 */
import { combineReducers } from 'redux';
import BookReducer from './books.reducer';
import BestsellerReducer from './bestseller.reducer';

const rootReducer = combineReducers({
  books: BookReducer,
  bestseller: BestsellerReducer
});

export default rootReducer;