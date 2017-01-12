import React, {Component} from 'react';
import styles from './styles.css'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class HeaderBar extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <AppBar
    title={<span style={styles.title}>Title</span>}
   
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={
      <div>
        <FlatButton label="Share a New Link" /> 
        <FlatButton label="LogOut" />
      </div>}
  />
    )
  }
}

export default HeaderBar;