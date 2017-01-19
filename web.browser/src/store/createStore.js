import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as postsReducer, voteUp, sortPopular, sortNewest } from './../reducers/postsreducer';


const logger = theStore => next => (action) => {
//   console.info('DISPATCHING!!', action);
  localStorage.setItem('postList', JSON.stringify(theStore.getState())); // eslint-disable-line
  let result;
  try {
    result = next(action);
    // console.info('NEXT_STATE!:', theStore.getState());
  } catch (e) {
    // console.warn('There was an error!');
    throw e;
  }
  return result;
};

const store = createStore(
    combineReducers({ postsList: postsReducer }),
    //    state => state, {},
    composeWithDevTools(),
    applyMiddleware(logger),
);

// store.dispatch(voteUp('0'));
store.dispatch(sortPopular('0'));
// store.dispatch(sortNewest('0'));


export default store;
