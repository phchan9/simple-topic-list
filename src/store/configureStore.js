import { createStore } from 'redux';
import { v4 } from 'node-uuid';
import reducers from '../reducers';

const topics = [
  {
    id: v4(),
    upVotes: 12,
    downVotes: 23,
    title: 'Things you should know before using AWS’s Elasticsearch Service'
  },
  {
    id: v4(),
    upVotes: 33,
    downVotes: 11,
    title: 'Cannabis reverses aging processes in the brain'
  },
  {
    id: v4(),
    upVotes: 41,
    downVotes: 2,
    title: 'Ask HN: How secure is the encryption offered by OS X\'s Disk Utility?'
  },
  {
    id: v4(),
    upVotes: 8,
    downVotes: 3,
    title: 'The world\'s largest library of historical European martial arts books'
  }
];

const initialState = {
  byId: topics.reduce((acc, topic) => ({...acc, [topic.id]: topic}), {}),
  allIds: topics.map(topic => topic.id)
};

const store = createStore(reducers, initialState);
export default store;
