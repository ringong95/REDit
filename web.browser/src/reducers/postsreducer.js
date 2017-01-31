
import { VOTE_UP } from './../actions/voteUp';
import { SORT_POPULAR, SORT_NEWEST } from './../actions/sortingActions';
import { LOADPOSTS } from './../actions/fetchActions';

export default (postList = [], action) => {
  switch (action.type) {
    case LOADPOSTS:
      return action.payload;
    case VOTE_UP:
      return postList.map((post) => {
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
