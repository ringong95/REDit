import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Post from './../Post';

const Posts = ({ posts, updateVote, postFilter }) => {
  const content = posts.filter((post) => (post.categories.includes(postFilter)))
    .map(post => (
      <Post
        key={post.id}
        author={post.author}
        votes={post.votes}
        categories={post.categories}
        title={post.title}
        description={post.description}
        link={post.link}
        updateVote={updateVote}
        postsLink={post}
        />
    ));

  return (
    <div>
      {content}
    </div>
  );
};

const mapStateToProps = state => ({
  postFilter: state.postFilter,
});

export default connect(mapStateToProps)(Posts); 
