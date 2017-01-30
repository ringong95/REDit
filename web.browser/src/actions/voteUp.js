export const VOTE_UP = 'VOTE_UP';
export const voteUp = post => ({
  type: VOTE_UP,
  payload: { post },
});
