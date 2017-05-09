/**
 * Created by Woosikoosi on 2017. 4. 28.
 */

const initialState = {
    //page: 0,
    postList: []
}

// export default function (state=initialState, action) {
//     switch (action.type) {
//         case 'NEXT': 
//             return state+1
//         case 'PREV':
//             return state-1
//         default:
//             return state
//     }
// }

export default function (state = initialState, action) {

  switch(action.type) {
    case 'BESTSELLER_POSTS':
      return {
        ...state,
        bestsellerPostList: action.payload
      };
  }
  return state;
}