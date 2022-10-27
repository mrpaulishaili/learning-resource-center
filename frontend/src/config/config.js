const env = () => {
  if (window.location.hostname === 'localhost' || '127.0.0.1') {
    return 'development';
  } else return 'production';
};

const API_URL =
  env === 'development'
    ? 'http://localhost:5000'
    : 'https://learning-resource-center-api.onrender.com/';

export { API_URL };
