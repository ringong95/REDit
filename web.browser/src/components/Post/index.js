import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


// Card flatbutton and chips
const Post = ( ({ author, votes, categories, title, description, link  } )=>{
    return (
      <Card className="Post">
        <a href="{link}"> {title} </a>
        <p> {description} </p>
        <FlatButton label={votes} />
        {categories.map((category)=>(
          
          <Chip > {category} </Chip>
        ))
        }

       </Card>  
    )
})
export default Post;