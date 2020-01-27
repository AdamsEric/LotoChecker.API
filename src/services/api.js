import axios from 'axios';

const api = axios.create({
   baseURL: 'api_da_caixa'
});

export default api;