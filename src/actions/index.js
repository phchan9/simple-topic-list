import axios from 'axios';
import { normalize } from 'normalizr';
import * as types from '../constants/ActionTypes';
import * as schema from './schema';

const KEY_PAYLOAD_TITLE = 'title';
const KEY_PAYLOAD_UPVOTES = 'upVotes';
const KEY_PAYLOAD_DOWNVOTES = 'downVotes';

// NOTE: must use REACT_APP prefix which is mentioned in create-react-app doc
const accessToken = process.env.REACT_APP_ACCESS_TOKEN || 'qazwsxedc';
const ROOT_URL = 'https://test-lb-api.herokuapp.com/api/topics';

export const fetchTopics = () => {
  const request = axios.get(`${ROOT_URL}`)
    .then(res => normalize(res.data, schema.arrayOfTopics))
    .catch(err => err);

  return {
    type: types.FETCH_TOPICS,
    payload: request,
  };
};

export const addTopic = (title) => {
  const request = axios.post(`${ROOT_URL}?access_token=${accessToken}`,
    {
      [KEY_PAYLOAD_TITLE]: title,
      [KEY_PAYLOAD_UPVOTES]: 0,
      [KEY_PAYLOAD_DOWNVOTES]: 0,
    })
    .then(res => normalize(res.data, schema.topic))
    .catch(err => err);

  return {
    type: types.ADD_TOPIC,
    payload: request,
  };
};

export const upVote = (id, vote) => {
  const request = axios.patch(`${ROOT_URL}/${id}?access_token=${accessToken}`,
    {
      [KEY_PAYLOAD_UPVOTES]: vote,
    },
  )
  .then(res => normalize(res.data, schema.topic))
  .catch(err => err);

  return {
    type: types.UPVOTE_TOPIC,
    payload: request,
  };
};

export const downVote = (id, vote) => {
  const request = axios.patch(`${ROOT_URL}/${id}?access_token=${accessToken}`,
    {
      [KEY_PAYLOAD_DOWNVOTES]: vote,
    },
  )
  .then(res => normalize(res.data, schema.topic))
  .catch(err => err);

  return {
    type: types.DOWNVOTE_TOPIC,
    payload: request,
  };
};
