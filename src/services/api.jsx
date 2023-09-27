import axios from 'axios';

// Simulate fetching posts from an API
export const fetchPosts = async (dispatch) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;
    dispatch({ type: 'SET_POSTS', payload: posts });
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};