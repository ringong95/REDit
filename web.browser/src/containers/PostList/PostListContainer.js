import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';
import { data } from './../../mock-data';
import { voteUp } from './../../reducers/postsreducer';

// for css make an object with the css in it and just add to where you need it.
class PostListContainer extends Component {
  constructor() {
    super();
    this.state = {
      orderBy: '',
    };
    this.updateVote = this.updateVote.bind(this);
    this.sortPopular = this.sortPopular.bind(this);
    this.sortNewest = this.sortNewest.bind(this);
  }
  getPosts() {
    const retrievedPosts = data.posts;
    const sortPosts = this.sortNewest(retrievedPosts);
    this.setState({ posts: sortPosts });
  }
  componentdidMount() {
    this.getPosts();
  }

  sortPopular() {
    const descending = (this.state.posts.sort((a, b) => b.votes - a.votes));
    this.setState({
      posts: descending,
      orderBy: 'popular',
    });
  }
  sortNewest() {
    const ascending = (this.state.posts.sort((a, b) => parseInt(a.id) - parseInt(b.id)));
    this.setState({
      posts: ascending,
      orderBy: 'newest',
    });
  }
  updateVote(post) {
    const newposts = this.state.posts.map(((datapost) => {
      if (datapost.id === post.id) {
        datapost.votes += 1;
      }
      return datapost;
    }));
    this.setState({ post: newposts });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.location.query.sort !== this.props.location.query.sort) {
      switch (nextProps.location.query.sort) {
        case 'newest':
          this.sortNewest();
          this.setState({ orderBy: 'newest' });
          break;
        case 'popular':
          this.sortPopular();
          this.setState({ orderBy: 'popular' });
          break;
        default:
          return null;
      }
    }
  }
  render() {
     console.log(this.props.postList)
    return (
      <PostList
        updateVote={this.props.updateVote}
        sortNewest={this.sortNewest}
        sortPopular={this.sortPopular}
        orderBy={this.state.orderBy}
        posts={this.props.postList}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateVote: post => dispatch(voteUp(post.id)),
});

const mapStateToProps = (state) => {
  return {
    postList: state.postsList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);
