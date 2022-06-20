import axios from 'axios';

const baseApi = axios.create({
  baseURL: process.env.REACT_APP_HOSTNAME,
  timeout: 60000,
});

export { baseApi };
