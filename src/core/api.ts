import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: import.meta.env.VITE_API_KEY
  },
  headers: {
    Accept: 'application/json, */*',
    'Content-Type': 'Application/json'
  }
});

export default api;
