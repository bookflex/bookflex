/**
 * Created by Joy on 2017. 5. 12..
 */
const initialStates = {
  isLike: null,
  eachBookStarPoint: []
};

export default function (state = initialStates, action) {
  switch(action.type) {
    case 'STAR_POINT':
      return {
        ...state,
        eachBookStarPoint: action.payload
      };
  }
  return state;
}