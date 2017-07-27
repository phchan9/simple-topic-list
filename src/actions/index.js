import { v4 } from 'uuid';
import axios from 'axios';
import { normalize } from 'normalizr';
import * as types from '../constants/ActionTypes';
import * as schema from './schema';

const KEY_PAYLOAD_TITLE = 'title';
const KEY_PAYLOAD_UPVOTES = 'upVotes';
const KEY_PAYLOAD_DOWNVOTES = 'downVotes';

const access_token = process.env.REACT_APP_ACCESS_TOKEN;
const ROOT_URL = 'https://test-lb-api.herokuapp.com/api/topics';

export const fetchTopics = () => {
  const request = axios.get(`${ROOT_URL}`);

  return {
    types: types.FETCH_TOPICS,
    payload: request
  };
}

export const addTopic = (title) => {
  const request = axios.post(`${ROOT_URL}?access_token=${access_token}`, 
    {
      [KEY_PAYLOAD_TITLE]: title,
      [KEY_PAYLOAD_UPVOTES]: 0,
      [KEY_PAYLOAD_DOWNVOTES]: 0      
    })
    .then(res => normalize(res.data, schema.topic));

  return {
    type: types.ADD_TOPIC,
    payload: request
  };
}

export const upVote = (id) => ({
  type: types.UPVOTE_TOPIC,
  id
});

export const downVote = (id) => ({
  type: types.DOWNVOTE_TOPIC,
  id
});
