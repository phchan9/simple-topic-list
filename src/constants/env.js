export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://api-topics.herokuapp.com/api/topics'
    : 'http://localhost:3001/api/topics';
export const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN || '3r3rw4w4w4';
