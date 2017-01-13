import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import styles from './styles.css'

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
export default Post;