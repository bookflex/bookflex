import GENRE from '../actions';

const initialStates = {
  genreList: []
};

export default function (state = initialStates, action) {
  switch(action.type) {
    case GENRE:
      return {
        ...state,
        genreList: action.payload
      };
    default:
      return {
        ...state
      }
  }
}
