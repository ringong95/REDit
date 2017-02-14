import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import { Card } from 'material-ui/Card';
import styles from './styles.css';
import { voteUp } from './../../actions/voteUp';


// Card flatbutton and chips
<<<<<<< HEAD
const Post = (({ votes = 0, categories, title, description, postlink, updateVote, post }) => (
=======
const Post = (({ votes = 0, categories, title, description, postlink, updateVote, post, tags }) => (
>>>>>>> postgres
  <Card className={styles.post}>
    <a href="{link}"> {title} </a>
    <p> {description} </p>
    <FlatButton onClick={() => { updateVote(post) } } label={votes ? `vote ${votes}` : 'vote 0 '} />
<<<<<<< HEAD
    {categories.map((category) => (
      <Chip> {category} </Chip>
=======
    {tags.map((tag) => (
      <Chip> {tag} </Chip>
>>>>>>> postgres
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





export default Post;
