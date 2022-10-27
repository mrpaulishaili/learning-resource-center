const BASE_URL = () => {
  return process.env.NODE_ENV === 'development'
    ? `http://localhost:${process.env.PORT}`
    : 'https://learning-resource-center-api.onrender.com';
};

export { BASE_URL };
