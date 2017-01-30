const weeksIntialState = {};
// const LOADCATEGORIES = 'LOADCATEGORIES';
const LOADWEEKS = 'LOADWEEKS';

export default (state = weeksIntialState, action) => {
  switch (action.type) {
    // case LOADCATEGORIES:
    //   return action.payload;
    case LOADWEEKS:
      return action.payload;
    default:
      return state;
  }
};
