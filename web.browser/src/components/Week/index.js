import React, { PropTypes } from 'react';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import styles from './styles.css'
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

export default Week;