import React from 'react';
import Topic from './Topic';

const TopicList = ({ topics, onUpVoteCallBack, onDownVoteCallBack}) => (
  <div>
    <ol className="list-group">
      {topics.map(topic => (
        <Topic
          key={topic.id}
          onUpVoteCallBack={() => onUpVoteCallBack(topic.id)}
          onDownVoteCallBack={() => onDownVoteCallBack(topic.id)}
          {...topic}
          />
      ))}
    </ol>
  </div>
);

export default TopicList;
