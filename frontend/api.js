import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export const getForms = () => api.get('/forms');
export const createForm = (data) => api.post('/forms', data);
