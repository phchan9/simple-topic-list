import * as types from '../constants/ActionTypes';

const topic = (state = {}, action) => {
  switch(action.type) {
  case types.ADD_TOPIC:
    return {
      id: action.id,
      upVotes: action.upVotes,
      downVotes: action.downVotes,
      title: action.title
    };

  case types.UPVOTE_TOPIC:
    return {
      ...state,
      upVotes: state.upVotes + 1
    };

  case types.DOWNVOTE_TOPIC:
    return {
      ...state,
      downVotes: state.downVotes + 1
    };

  default:
    return state;
  }
};

export default topic;
