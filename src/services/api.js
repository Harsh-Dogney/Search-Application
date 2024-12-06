import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const getPosts = async (searchQuery = '') => {
  const response = await axios.get(`${API_URL}/posts${searchQuery ? `?search=${searchQuery}` : ''}`);
  return response.data;
};

export const createPost = async (postData) => {
  const response = await axios.post(`${API_URL}/posts`, postData);
  return response.data;
};