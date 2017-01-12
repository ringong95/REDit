import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


// Card flatbutton and chips
const Post = ( ({ author, votes = 0, categories, title, description, link, updateVote  } )=>{
    return (
      <Card className="Post">
        <a href="{link}"> {title} </a>
        <p> {description} </p>
        <FlatButton onClick={updateVote} label={votes ? `${votes} votes` : '0 votes'} />
        {categories.map((category)=>(
          
          <Chip > {category} </Chip>
        ))
        }

       </Card>  
    )
})
export default Post;