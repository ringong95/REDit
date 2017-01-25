import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import { connect } from 'react-redux';
import Week from './../../components/Week';
import displayFilter from './../../actions/displayFiltered';

const Categories = (({ drawerStyle, weeks, displayFilter }) => {
  const content = weeks.map((week) => {
    return (
      <Week
        key={week.id}
        title={week.title}
        categories={week.categories}
        displayFilter={displayFilter}
        />);
  });

  return (
    <div>
      <Drawer open={true} containerStyle={drawerStyle}>
        {content}
      </Drawer>
    </div>
  )
})
Categories.propTypes = {
  drawerStyle: PropTypes.shape({
    height: PropTypes.string.isRequired,
    top: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
  }),
  weeks: PropTypes.array.isRequired,
  applyFilter: PropTypes.func.isRequired,
};

export default Categories; 
