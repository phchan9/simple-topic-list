import * as types from '../constants/ActionTypes';

const allIds = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_TOPICS:
      if (!action.payload.result) {
        return state;
      }
      return [...state, ...action.payload.result];
    case types.ADD_TOPIC:
      if (!action.payload.result) {
        return state;
      }
      return [...state, action.payload.result];
    default:
      return state;
  }
};

export default allIds;
