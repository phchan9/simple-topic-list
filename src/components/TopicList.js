import React from 'react';
import Topic from './Topic';

const TopicList = ({ topics, onUpVoteCallBack, onDownVoteCallBack}) => (
  <ol>
    {topics.map(topic => (
      <li className="list-group">
        <Topic
          key={topic.id}
          onUpVoteCallBack={onUpVoteCallBack}
          onDownVoteCallBack={onDownVoteCallBack}
          {...topics}
          />
      </li>
    ))}
  </ol>
);

export default TopicList;
