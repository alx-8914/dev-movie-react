import axios from "axios";

const api = axios.create( {
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '71c437f619c3748030fef1a8d07c8be0',
    language: 'pt-BR',
    page: 1
  }
})
export default api