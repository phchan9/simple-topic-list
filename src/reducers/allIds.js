import * as types from '../constants/ActionTypes';

const allIds = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_TOPICS:
      if (
        !Object.keys(action.payload.entities).length ||
        !Array.isArray(action.payload.result)
      ) {
        return state;
      }
      return [...state, ...action.payload.result];
    case types.ADD_TOPIC:
    case types.RECEIVE_NEW_TOPIC:
      if (
        !action.payload.result ||
        state.indexOf(action.payload.result) !== -1
      ) {
        return state;
      }
      return [...state, action.payload.result];
    default:
      return state;
  }
};

export default allIds;
