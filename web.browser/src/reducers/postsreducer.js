
const VOTE_UP = 'VOTE_UP';

const SORT_POPULAR = 'SORT_POPULAR';

const SORT_NEWEST = 'SORT_NEWEST';

export default (postList = [], action) => {
  // let newPostList = {};

  // if (localStorage.getItem('postList')) {
  //   newPostList = JSON.parse(localStorage.getItem('postList'));
  //   newPostList = newPostList.postsList;
  // } else {
  //   newPostList = postList;
  // }

  switch (action.type) {
    case VOTE_UP:
      // return postList.map((post) => {
      return postList.map((post) => {
        console.log(post.id);
        console.log(action.payload.post.id);
        if (post.id !== action.payload.post.id) return post;
        return {
          ...post, votes: post.votes + 1,
        };
      });
    case SORT_POPULAR:
      return (postList.slice().sort((a, b) => b.votes - a.votes));
    case SORT_NEWEST:
      return postList.slice().sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10));
    default:
      return postList;
  }
};
