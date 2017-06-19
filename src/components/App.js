import React from 'react';
import TopicListContainer from '../containers/TopicListContainer';
import AddTopicContainer from '../containers/AddTopicContainer';

const App = () => (
  <div clasName="flex-column">
    <AddTopicContainer />
    <TopicListContainer />
  </div>
);

export default App;
