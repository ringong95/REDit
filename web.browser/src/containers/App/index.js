import React, { Component, PropTypes } from 'react';
import Categories from './../Categories';
import styles from './styles.css'
import store from './../../store/createStore'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
      <Categories/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
};

export default App;
