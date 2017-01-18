import React from 'react';
import styles from './styles.css'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const HeaderBar = (()=>{
  const headerstyle = {
    position: "fixed"
  }
  return(
      <AppBar style={headerstyle}
    title={<span style={styles.title}>Redit</span>}
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={
      <div>
        <FlatButton label="Share a New Link" /> 
        <FlatButton label="LogOut" />
      </div>}
  />
)}  
)


export default HeaderBar;