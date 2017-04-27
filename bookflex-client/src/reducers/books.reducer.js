/**
 * Created by Joy on 2017. 4. 26..
 */
const initialStates = {
  bookList: [],
  searchedBookList: [],
  selectedBook: null
};

export default function (state = initialStates, action) {
  switch(action.type) {
    case 'SEARCHED_BOOKS':
      return {
        ...state,
        searchedBookList: action.payload
      };
  }
  return state;
}