
const VOTE_UP = 'VOTE_UP';

const SORT_POPULAR = 'SORT_POPULAR';
const SORT_NEWEST = 'SORT_NEWEST';
const LOADPOSTS = 'LOADPOSTS';

export default (postList = [], action) => {
  switch (action.type) {
    case LOADPOSTS:
      console.log(action.payload);
      return action.payload;
    case VOTE_UP:
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
