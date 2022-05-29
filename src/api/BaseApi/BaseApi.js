import axios from 'axios';

const BaseApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export { BaseApi };
