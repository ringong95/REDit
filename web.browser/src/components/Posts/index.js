import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Post from './../Post';

const Posts = ({ posts, updateVote, postFilter }) => {
<<<<<<< HEAD
=======
  console.log(posts);
>>>>>>> postgres
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
        tags={post.tags}
        post={post}
        />
    ));

  return (
    <div>
      {content}
    </div>
  );
};

Posts.propTypes = {
  author: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired, //eslint-disable-line
};
const mapStateToProps = state => ({
  postFilter: state.postFilter,
});


export default connect(mapStateToProps)(Posts);
