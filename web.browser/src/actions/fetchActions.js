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
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Cache: 'no-cache',
  },
  credentials: 'include',
};

export function submitPost(data) {
  fetch('http://localhost:8000/api/posts/', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: {
      posts: {
        title: data.posttitle,
        'link': data.link,
        description: data.description,
        'category': data.category,
      },
    },
  })
    .then(response => response.json());
  // .then(json => dispatch(loadPosts(json)));
}


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

export const logIn = (data) => {
  const body = {
    login: {
      email: data.email,
      password: data.password,
    },
  };
  const jsonBody = JSON.stringify(body);
  console.log(body);
  console.log(jsonBody);
  fetch('http://localhost:8000/auth/login', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { "Content-Type": 'application/json; charset=utf-8' },
    body: jsonBody,
  });
};

