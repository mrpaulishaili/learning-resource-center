const env = window.location.hostname.includes('localhost');

const API_URL = env
  ? 'http://localhost:5000'
  : 'https://learning-resource-center-api.onrender.com';

export { API_URL };
