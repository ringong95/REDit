import React, { PropTypes } from 'react';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import { displayFilter } from '../../actions/displayFiltered';

const Week = (({ title, categories }) => {
  const drawerStyle = {
    textAlign: 'center',
  };

  return (
    <div>
      <h3 style={drawerStyle}> {title} </h3>
      <Divider />
      {categories.map(category => (
        <MenuItem onTouchTap={() => { displayFilter(category); } }> {category} </MenuItem>
      ))}
    </div>
  );
});

Week.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
};


const mapDispatchToProps = dispatch => ({
  displayFilter: category => dispatch(displayFilter(category)),
});

const mapStateToProps = state => (
  state
);

export default connect(mapStateToProps, mapDispatchToProps)(Week); 
