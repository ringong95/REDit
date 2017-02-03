export const LOADPOSTS = 'LOADPOSTS';
const LOADCATEGORIES = 'LOADCATEGORIES';
export const LOADWEEKS = 'LOADWEEKS';

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
const postRequest = {
  method: 'POST',
  credentials: 'same-origin',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
};
const getRequest = {
  method: "GET",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Cache': 'no-cache',
  },
  credentials: 'include',
};

export const fetchPosts = nothing => (dispatch) => {
  fetch('http://localhost:8000/api/posts/5', getRequest)
    .then(response => response.json())
    .then(json => dispatch(loadPosts(json)));
};

export const fetchCategories = nothing => (dispatch) => {
  fetch('http://localhost:8000/api/categories', getRequest)
    .then(response => response.json())
    .then(json => dispatch(loadCategories(json)));
};

export const fetchWeeks = nothing => (dispatch) => {
  fetch('http://localhost:8000/api/weeks', getRequest)
    .then(response => response.json())
    .then(json => dispatch(loadWeeks(json)));
};



// credentials: 'same-origin'
