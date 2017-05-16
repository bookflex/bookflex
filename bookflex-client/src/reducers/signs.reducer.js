
const initialStates = {
  boolVisible: false,
  receiveData: {}
};

export default function (state = initialStates, action) {
  switch(action.type) {
    case 'AJAX_LOGIN':
      return {
        ...state,
        receiveData: action.payload
      };
  }
  return state;
}