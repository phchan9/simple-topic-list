import React from 'react';
import TopicListContainer from '../containers/TopicListContainer';
import AddTopicContainer from '../containers/AddTopicContainer';

/* eslint-disable react/jsx-filename-extension */
const App = () => (
  <div className="flex-column">
    <AddTopicContainer />
    <TopicListContainer />
  </div>
);

export default App;
