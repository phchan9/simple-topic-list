import * as types from '../constants/ActionTypes';

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_TOPICS:
    case types.ADD_TOPIC:
    case types.UPVOTE_TOPIC:
    case types.DOWNVOTE_TOPIC:
    case types.RECEIVE_UPDATED_TOPIC:
    case types.RECEIVE_NEW_TOPIC:
      if (!action.payload.entities) {
        return state;
      }
      return {
        ...state,
        ...action.payload.entities.topics,
      };

    default:
      return state;
  }
};

export default byId;
