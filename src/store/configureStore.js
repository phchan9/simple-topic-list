import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { v4 } from 'uuid';
import reducers from '../reducers';
import { createTopic } from '../utils';

const topics = [
  createTopic(v4(), 12, 23, 'Things you should know before using AWS’s Elasticsearch Service'),
  createTopic(v4(), 33, 11,
              'Cannabis reverses aging processes in the brain'),
  createTopic(v4(), 41, 2,
              'Ask HN: How secure is the encryption offered by OS X\'s Disk Utility?'),
  createTopic(v4(), 8, 3,
              'The world\'s largest library of historical European martial arts books')
];

const initialState = {
  byId: topics.reduce((acc, topic) => ({...acc, [topic.id]: topic}), {}),
  allIds: topics.map(topic => topic.id)
};

const store = createStore(reducers, initialState, applyMiddleware(promise));
export default store;
