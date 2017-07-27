import * as types from '../constants/ActionTypes';
import topic from './topic';

const byId = (state = {}, action) => {
  switch(action.type) {
  case types.ADD_TOPIC:
  case types.UPVOTE_TOPIC:
  case types.DOWNVOTE_TOPIC:
    return {
      ...state,
      ...action.payload.entities.topics
    };

  default:
    return state;
  }
};

export default byId;
