import axios from 'axios';

const COUNTRY_API_URL = process.env.NEXT_PUBLIC_COUNTRY_API_URL;

const api = axios.create({
  baseURL: COUNTRY_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
