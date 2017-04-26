/**
 * Created by Joy on 2017. 4. 24..
 */
import { combineReducers } from 'redux';
import BookReducer from './books.reducer';

const rootReducer = combineReducers({
  books: BookReducer
});

export default rootReducer;