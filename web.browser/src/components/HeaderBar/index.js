import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import CommunicationImportContacts from 'material-ui/svg-icons/communication/import-contacts';
import styles from './styles.css';

const HeaderBar = (() => {
  const headerstyle = {
    position: 'fixed',
  };
  return (
    <AppBar
      style={headerstyle}
      title={<span>RED it</span>}
      iconElementLeft={<IconButton><CommunicationImportContacts /></IconButton>}
      iconElementRight={
        <div>
          <FlatButton label="Share a New Link" />
          <FlatButton label="LogOut" />
        </div>}
      />
  );
}
);


export default HeaderBar;
