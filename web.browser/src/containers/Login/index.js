import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Gandalf from './../../lib/gandalf/gandalf';

import { connect } from 'react-redux';
import { logIn } from '../../actions/fetchActions'

class Login extends Gandalf {
  constructor() {
    const fields = {
      email: {
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Email',
        },
      },
      password: {
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'password',
        },
      },
    };

    super(fields);
  }
  handleSubmit() {
    const data = this.getCleanFormData();
    if (!data) return null;
    console.log(data);
    this.props.loggingIn(data);
    // Math
  }

  render() {
    const fields = this.state.fields;

    return (
      <form>
        <h1>My Form</h1>

        {fields.email.element} <br />
        {fields.password.element} <br />

        <FlatButton label="Primary" primary onClick={() => (this.handleSubmit())} />
      </form>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  loggingIn: data => dispatch(logIn(data)),
});

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
