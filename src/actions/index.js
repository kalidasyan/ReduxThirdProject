import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST_BY_ID = 'FETCH_POST_BY_ID';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=slkdfjafjsldk1123fjfjkk';

export function fetchPosts() {
  const url = `${ROOT_URL}/posts${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(props){
  const request = axios.post(`${ROOT_URL}/posts/${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPostById(id) {
  const url = `${ROOT_URL}/posts/${id}${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_POST_BY_ID,
    payload: request
  };
}

export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: DELETE_POST,
    payload: request
  }
}
