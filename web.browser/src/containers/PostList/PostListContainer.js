import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';
// import { data } from './../../mock-data';
import { voteUp } from './../../actions/voteUp';
import { sortNewest, sortPopular } from './../../actions/sortingActions';

import { fetchPosts } from './../../actions/fetchActions';

// for css make an object with the css in it and just add to where you need it.
class PostListContainer extends Component {
  constructor() {
    super();
    this.state = {
      orderBy: '',
    };
  }
  componentDidMount() {
    this.props.fetchingPosts('nothing');
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
    return nextProps;
  }
  getPosts() {
    const sortPosts = this.props.dispatch(sortNewest('nothing'));
    this.setState({ posts: sortPosts });
  }
  componentdidMount() {
    this.getPosts();
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
  updateVote: post => dispatch(voteUp(post)),
  sortPopular: nothing => dispatch(sortPopular(nothing)),
  sortNewest: nothing => dispatch(sortNewest(nothing)),
  fetchingPosts: nothing => dispatch(fetchPosts(nothing)),
});

const mapStateToProps = (state) => {
  return {
    postList: state.posts,
  };
};

PostListContainer.propTypes = {
  updateVote: PropTypes.func.isRequired,
  sortPopular: PropTypes.func.isRequired,
  sortNewest: PropTypes.func.isRequired,
  postList: PropTypes.arrayOf(React.PropTypes.object).isRequired,
  location: PropTypes.object.isRequired, //eslint-disable-line
};

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);
