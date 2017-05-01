/**
 * Created by hwigyum on 2017. 4. 27..
 */
const initialStates = {
  bestsellerBookList: []
};

debugger;
export default function (state = initialStates, action) {
  debugger;
  switch(action.type) {
    case 'BESTSELLER_BOOKS':
      return {
        ...state,
        bestsellerBookList: action.payload
      };
  }
  return state;
}