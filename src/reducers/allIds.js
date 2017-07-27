import * as types from '../constants/ActionTypes';

const allIds = (state = [], action) => {
  switch(action.type) {
  case types.ADD_TOPIC:
    return [...state, action.payload.result];

  default:
    return state;
  }
};

export default allIds;
