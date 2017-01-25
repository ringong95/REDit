import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categories from './Categories';
import displayFilter from './../../actions/displayFiltered';

class CategoriesContainer extends Component {
  render() {
    const drawerStyle = {
      height: '90%',
      top: '10%',
      width: '200px',
    };
    return (
      <Categories
        drawerStyle={drawerStyle}
        weeks={this.props.weeks}
        displayFilter={this.props.displayFilter}
        />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  displayFilter: category => dispatch(displayFilter(category)),
});

const mapStateToProps = state => ({
  weeks: state.weeks,
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer); 

