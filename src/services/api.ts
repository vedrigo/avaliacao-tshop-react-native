import axios from 'axios';

const api = axios.create({
  baseURL: 'https://imdb-api.com/pt-BR/API',
});

export default api;
