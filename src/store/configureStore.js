import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise';
import reducers from '../reducers';

const enhancer = composeWithDevTools(applyMiddleware(promise));
const store = createStore(reducers, enhancer);

export default store;
