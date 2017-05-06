import { combineReducers } from 'redux';
import BookReducer from './books.reducer';
import GenreReducer from './genre.reducer';

const rootReducer = combineReducers({
  books: BookReducer,
  genre: GenreReducer,
});

export default rootReducer;