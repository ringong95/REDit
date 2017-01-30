const SET_DISPLAY_FILTER = 'SET_DISPLAY_FILTER';
export const displayFilter = category => ({
  type: SET_DISPLAY_FILTER,
  payload: { category },
});
