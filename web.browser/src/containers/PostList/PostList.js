import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import styles from "./styles.css"
import PostToolbar from './../../components/PostToolbar'
import Posts from './../../components/Posts'
const PostList = (({updateVote, sortNewest, sortPopular, orderBy, posts}) => {
  return (
    <div>
      <PostToolbar
        sortPopular={sortPopular}
        sortNewest={sortNewest}
        orderBy={orderBy} />
      <div className="PostList ">
        <Posts posts={posts} updateVote={updateVote} />
      </div>
    </div>
  );
});

PostList.propTypes = {
  updateVote: PropTypes.func.isRequired,
  sortPopular: PropTypes.func.isRequired,
  sortNewest: PropTypes.func.isRequired,
  orderBy: PropTypes.string.isRequired,
}


export default PostList;