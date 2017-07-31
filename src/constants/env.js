let API_URL = 'http://localhost:3001/api/topics';

if (process.env.NODE_ENV === 'production') {
  API_URL = 'http://api-topics.herokuapp.com/api/topics';
}

export default API_URL;
