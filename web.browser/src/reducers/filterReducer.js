const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'DISPLAY_FILTER':
      return action.payload.category;
    default:
      return state;
  }
};

export default filterReducer;