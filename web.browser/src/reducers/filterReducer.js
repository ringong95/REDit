const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_DISPLAY_FILTER':
      return action.payload.category;
    default:
      return state;
  }
};

export default filterReducer;