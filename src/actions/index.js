import { v4 } from 'uuid';
import * as types from '../constants/ActionTypes';

// use v4() to let topic.id be unique.
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
