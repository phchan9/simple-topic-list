import v4 from 'node-uuid';
import * as types from '../constants/ActionTypes';

export const addTopic = (title) => ({
  type: types.ADD_TOPIC,
  id: v4(),
  upVotes: 0,
  downVotes: 0,
  title
});

export const upVote = (id) => ({
  type: types.UPVOTE_TOPIC,
  id
});

export const downVote = (id) => ({
  type: types.DOWNVOTE_TOPIC,
  id
});
