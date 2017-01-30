const LOADPOSTS = 'LOADPOSTS';
const LOADCATEGORIES = 'LOADCATEGORIES';
const LOADWEEKS = 'LOADWEEKS';

export function loadPosts(items) {
  return {
    type: LOADPOSTS,
    payload: items,
  };
}
export function loadCategories(items) {
  return {
    type: LOADCATEGORIES,
    payload: items,
  };
}
export function loadWeeks(items) {
  return {
    type: LOADWEEKS,
    payload: items,
  };
}
export const fetchPosts = nothing => (dispatch) => {
  fetch('http://localhost:3001/posts', {})
    .then(response => response.json())
    .then(json => dispatch(loadPosts(json)));
};

export const fetchCategories = nothing => (dispatch) => {
  fetch('http://localhost:3001/categories', {})
    .then(response => response.json())
    .then(json => dispatch(loadCategories(json)));
};

export const fetchWeeks = nothing => (dispatch) => {
  fetch('http://localhost:3001/weeks', {})
    .then(response => response.json())
    .then(json => dispatch(loadWeeks(json)));
};

