import { LOADWEEKS } from './../actions/fetchActions';

const weeksIntialState = {};
// const LOADCATEGORIES = 'LOADCATEGORIES';

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
