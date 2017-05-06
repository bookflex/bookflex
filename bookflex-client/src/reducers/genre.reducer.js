const initialStates = {
  genreList: [],
};

export default (state = initialStates, action) => {
  switch (action.type) {
    case 'Genre':
      return {
        ...state,
        genreList: action.payload,
      };
    default:
      return state;
  }
};
