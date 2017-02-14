import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import storeFactory from '../src/store/createStore';
import App from './containers/App';
import MainLayout from './layouts/MainLayout';
import Welcome from './containers/Welcome';
import Login from './containers/Login';
import CreatePost from './containers/CreatePost';
import PostList from './containers/PostList';
import muiTheme from './styles/mui-theme';
import './styles/index.css';


const initialState = {
  weeks: [],
  posts: [],
  postFilter: 'This is a medicore category name',
};

const store = storeFactory(initialState);
// Needed for onTouchTap (Material UI)
// http://stackoverflow.com/a/34015469/988941

injectTapEventPlugin();

ReactDOM.render(

  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route component={MainLayout}>
          <Route path="/" component={App}>
            <IndexRoute component={Welcome} />
            <Route path="/login" component={Login} />
            <Route path="/posts">
              <Route path="new" component={CreatePost} />
              <Route path=":name" component={PostList} />
            </Route>
          </Route>
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root'),
);
