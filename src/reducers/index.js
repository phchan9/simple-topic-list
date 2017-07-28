import { combineReducers } from 'redux';
import byId from './byId';
import allIds from './allIds';

const reducers = combineReducers({
  byId,
  allIds,
});

export default reducers;

const getAllTopics = state => state.allIds.map(id => state.byId[id]);

export const getAllSortedTopicList = (state) => {
  const allTopicList = getAllTopics(state);

  // sort the topic list decreasingly by upvotes
  return allTopicList.sort((a, b) => b.upVotes - a.upVotes);
};
