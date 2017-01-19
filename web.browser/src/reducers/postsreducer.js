// import expect from 'expect';
import deepFreeze from 'deep-freeze';
import { data } from './../mock-data';

// const POSTS = 'POSTS';

const VOTE_UP = 'VOTE_UP';
export const voteUp = id => ({
  type: VOTE_UP,
  payload: { id },
});

const SORT_POPULAR = 'SORT_POPULAR';
export const sortPopular = () => ({
  type: SORT_POPULAR,
  payload: {},
});

const SORT_NEWEST = 'SORT_NEWEST';
export const sortNewest = () => ({
  type: SORT_NEWEST,
  payload: {},
});

function getInitialPostList() {
  if (localStorage.getItem('postList')) {
    const newPostList = JSON.parse(localStorage.getItem('postList'));
    return newPostList.postsList;
  } else { // eslint-disable-line
    return data.posts;
  }
}

const initialPostList = getInitialPostList();
deepFreeze(initialPostList);

export const reducer = (postList = initialPostList, action) => {
  let newPostList = {};

  if (localStorage.getItem('postList')) {
    newPostList = JSON.parse(localStorage.getItem('postList'));
    newPostList = newPostList.postsList;
  } else {
    newPostList = postList;
  }

  switch (action.type) {
    case VOTE_UP:
      // return postList.map((post) => {
      return newPostList.map((post) => {
        if (post.id !== action.payload.id) return post;
        return {
          ...post, votes: post.votes + 1,
        };
      });
    case SORT_POPULAR:
      console.log("hey");
      return (postList.slice().sort((a, b) => b.votes - a.votes));
    case SORT_NEWEST:
      //                        spreading also works.
      return postList.slice().sort((a, b) => parseInt(a.id) - parseInt(b.id));
    default:
      return postList;
  }
}


const B = {
  id: '1',
  author: 'Shawn',
  votes: 5,
  categories: [
    'React',
  ],
  title: 'React ?',
  description: 'Some React resource',
  link: '//github.com/react',
};

const A = {
  id: '0',
  author: 'Mackenzie',
  votes: 0,
  categories: [
    'React',
  ],
  title: 'React!!!!',
  description: 'Some React resource',
  link: '//github.com/react',
};



