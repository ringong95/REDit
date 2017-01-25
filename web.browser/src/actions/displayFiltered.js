const DISPLAY_FILTER = 'DISPLAY_FILTER';
export const displayFilter = category => ({
  type: DISPLAY_FILTER,
  payload: { category },
});
