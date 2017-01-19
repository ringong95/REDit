import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';
import { data } from './../../mock-data';
import { voteUp, sortPopular, sortNewest } from './../../reducers/postsreducer';

// for css make an object with the css in it and just add to where you need it.
class PostListContainer extends Component {
  constructor() {
    super();
    this.state = {
      orderBy: '',
    };
    // this.sortPopular = this.sortPopular.bind(this);
    // this.sortNewest = this.sortNewest.bind(this);
  }
  getPosts() {
    const retrievedPosts = data.posts;
    const sortPosts = this.sortNewest(retrievedPosts);
    this.setState({ posts: sortPosts });
  }
  componentdidMount() {
    this.getPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.query.sort !== this.props.location.query.sort) {
      switch (nextProps.location.query.sort) {
        case 'newest':
          this.props.sortNewest();
          this.setState({ orderBy: 'newest' });
          break;
        case 'popular':
          this.props.sortPopular();
          this.setState({ orderBy: 'popular' });
          break;
        default:
          return null;
      }
    }
  }
  render() {
    return (
      <PostList
        updateVote={this.props.updateVote}
        sortNewest={this.props.sortNewest}
        sortPopular={this.props.sortPopular}
        orderBy={this.state.orderBy}
        posts={this.props.postList}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateVote: post => dispatch(voteUp(post.id)),
  sortPopular: nothing => dispatch(sortPopular(nothing)),
  sortNewest: nothing => dispatch(sortNewest()),
});

const mapStateToProps = (state) => {
  return {
    postList: state.postsList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);
