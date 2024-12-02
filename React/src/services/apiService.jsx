import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY; // API key from environment variables

export const fetchMovies = async (query) => {
  const url = `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`;  // Use HTTPS instead of HTTP

  try {
    const response = await axios.get(url);
    if (response.data.Response === 'True') {
      return response.data.Search;
    } else {
      throw new Error('No results found');
    }
  } catch (error) {
    throw new Error(`Sorry, we don't have ${query}`);
  }
};
