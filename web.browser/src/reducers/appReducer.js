import { combineReducers } from 'redux';
import postFilterReducer from './filterReducer';
import postReducer from './postsReducer';
import weeksReducer from './weeksReducer';

export default combineReducers({
  weeks: weeksReducer,
  posts: postReducer,
  postFilter: postFilterReducer,
});

