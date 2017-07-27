import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { v4 } from 'uuid';
import reducers from '../reducers';
import { createTopic } from '../utils';

const store = createStore(reducers, applyMiddleware(promise));
export default store;
