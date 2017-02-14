import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Gandalf from './../../lib/gandalf/gandalf';
<<<<<<< HEAD
=======
import { connect } from 'react-redux';
import { logIn } from '../../actions/fetchActions'
>>>>>>> postgres

class Login extends Gandalf {
  constructor() {
    const fields = {
<<<<<<< HEAD
      postTitle: {
=======
      email: {
>>>>>>> postgres
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
<<<<<<< HEAD
          hintText: 'Title',
        },
      },
      author: {
=======
          hintText: 'Email',
        },
      },
      password: {
>>>>>>> postgres
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
<<<<<<< HEAD
          hintText: 'Author',
        },
      },
      category: {
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Category',
        },
      },
      description: {
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Description',
        },
      },
      link: {
        component: TextField,
        validators: ['required', 'url'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Link',
=======
          hintText: 'password',
>>>>>>> postgres
        },
      },
    };

    super(fields);
  }
  handleSubmit() {
    const data = this.getCleanFormData();
<<<<<<< HEAD

    if (!data) return null;
    console.log(data);
=======
    if (!data) return null;
    console.log(data);
    this.props.loggingIn(data);
>>>>>>> postgres
    // Math
  }

  render() {
    const fields = this.state.fields;

    return (
      <form>
        <h1>My Form</h1>
<<<<<<< HEAD
        {fields.postTitle.element} <br />
        {fields.author.element} <br />
        {fields.category.element} <br />
        {fields.description.element} <br />
        {fields.link.element} <br />
=======
        {fields.email.element} <br />
        {fields.password.element} <br />
>>>>>>> postgres
        <FlatButton label="Primary" primary onClick={() => (this.handleSubmit())} />
      </form>
    );
  }
}

<<<<<<< HEAD
export default Login;
=======
const mapDispatchToProps = dispatch => ({
  loggingIn: data => dispatch(logIn(data)),
});

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
>>>>>>> postgres
