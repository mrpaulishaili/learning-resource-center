const env = window.location.hostname.includes('localhost');

const API_URL = env
  ? 'http://localhost:5000/api'
  : 'https://learning-resource-center-api.onrender.com/api';

export { API_URL };
