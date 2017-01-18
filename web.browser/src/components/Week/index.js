import React, { PropTypes } from 'react';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';

const Week = (({ title, categories }) => {
     const drawerStyle ={
         textAlign: "center"
   }

    return (
        <div>
            <h3 style={drawerStyle}> {title} </h3>
            <Divider />
            {categories.map((category) => {
                return (
                    <MenuItem> {category} </MenuItem>
                )
            })}
        </div>
    )
})
Week.propTypes = {
    title: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
}

export default Week;