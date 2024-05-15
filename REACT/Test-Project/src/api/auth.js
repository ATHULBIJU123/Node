import axios from 'axios';

axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const login = async()