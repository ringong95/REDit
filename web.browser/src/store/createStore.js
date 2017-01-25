import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from '../reducers/appReducer';



// const logger = theStore => next => (action) => {
//   localStorage.setItem('postList', JSON.stringify(theStore.getState())); // eslint-disable-line
//   let result;
//   try {
//     result = next(action);
//   } catch (e) {
//     throw e;
//   }
//   return result;
// };


// const store = createStore(
//   combineReducers({ postsList: postsReducer }),
//   //    state => state, {},
//   composeWithDevTools(),
//   applyMiddleware(logger),
// );

// store.dispatch(voteUp('0'));
// store.dispatch(sortPopular('0'));
// // store.dispatch(sortNewest('0'));


export default (initialState = {}) => {
  return createStore(appReducer, initialState, composeWithDevTools());
};
