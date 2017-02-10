import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from '../reducers/appReducer';

export default (initialState = {}) => {
  return applyMiddleware(thunk)(createStore)(appReducer, initialState, composeWithDevTools());
};
