import React from 'react';
import TextField from 'material-ui/TextField';
<<<<<<< HEAD
import FlatButton from 'material-ui/FlatButton';
import Gandalf from './../../lib/gandalf/gandalf';
=======
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import Gandalf from './../../lib/gandalf/gandalf';
import { submitPost } from './../../actions/fetchActions';
>>>>>>> postgres

class CreatePost extends Gandalf {
  constructor() {
    const fields = {
      postTitle: {
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Title',
        },
      },
      author: {
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
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
        },
      },
    };

    super(fields);
  }
  handleSubmit() {
    const data = this.getCleanFormData();

    if (!data) return null;
    console.log(data);
<<<<<<< HEAD
=======
    this.props.submitingPost(data);
    return null;
>>>>>>> postgres
    // Math
  }

  render() {
    const fields = this.state.fields;

    return (
<<<<<<< HEAD
      <form>
=======
      <form >
>>>>>>> postgres
        <h1>My Form</h1>
        {fields.postTitle.element} <br />
        {fields.author.element} <br />
        {fields.category.element} <br />
        {fields.description.element} <br />
        {fields.link.element} <br />
        <FlatButton label="Primary" primary onClick={() => (this.handleSubmit())} />
      </form>
    );
  }
}

<<<<<<< HEAD
export default CreatePost;
=======
const mapDispatchToProps = dispatch => ({
  submitingPost: data => dispatch(submitPost(data)),
});

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
>>>>>>> postgres
