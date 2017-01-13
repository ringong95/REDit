import React, { Component, PropTypes } from 'react';
import Week from './../../components/Week'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


class Categories extends Component { 
  render() {
    const drawerStyle ={
    height: "90%",
    top: "10%",
    width: "150px"
  }
    return (
       <div>
        
        <Drawer open={true} containerStyle={drawerStyle}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}
export default Categories;