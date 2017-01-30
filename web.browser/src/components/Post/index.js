import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import { connect } from 'react-redux';
import { Card } from 'material-ui/Card';
import styles from './styles.css';
import { voteUp } from './../../actions/voteUp';

// Card flatbutton and chips
const Post = (({ votes = 0, categories, title, description, postlink, updateVote, post }) => (
  <Card className={styles.post}>
    <a href="{link}"> {title} </a>
    <p> {description} </p>
    <FlatButton onClick={() => { updateVote(post); }} label={votes ? `vote ${votes}` : 'vote 0 '} />
    {categories.map((category) => (
      <Chip> {category} </Chip>
    ))
    }

  </Card>
));
Post.propTypes = {
  author: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  categories: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};



const mapDispatchToProps = dispatch => ({
  updateVote: post => dispatch(voteUp(post)),
});

const mapStateToProps = state => (
  state
);

export default connect(mapStateToProps, mapDispatchToProps)(Post); 