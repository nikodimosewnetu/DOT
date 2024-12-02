import axios from 'axios';

const API_KEY = '11ca9e8c';  

export const fetchMovies = async (query) => {
  const url = `http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`;
  try {
    const response = await axios.get(url);
    if (response.data.Response === 'True') {
      return response.data.Search;
    } else {
      throw new Error('No results found');
    }
  } catch (error) {
    throw new Error(`sorry, we don't have ${query}`);
  }
};
