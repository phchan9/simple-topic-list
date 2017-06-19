import { combinedReducers } from 'redux';
import byId from './byId';
import allIds from './allIds';

const reducers = combinedReducers({
  byId,
  allIds
});

export default reducers;
