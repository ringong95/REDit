import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import styles from './styles.css'
import store from './../../store/createStore'
import { voteUp } from './../../reducers/postsreducer'

// Card flatbutton and chips
const Post = ( ({ author, votes = 0, categories, title, description, link, updateVote  } )=>{
    return (
      <Card className={styles.post}>
        <a href="{link}"> {title} </a>
        <p> {description} </p>
        <FlatButton onClick={updateVote} label={votes ? `vote ${votes}` : 'vote 0 '} />
        {categories.map((category)=>(
          <Chip> {category} </Chip>
        ))
        }

       </Card>  
    )
})
Post.propTypes = {
    author: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    categories: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}
export default Post;