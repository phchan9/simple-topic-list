import React from 'react';
import PropTypes from 'prop-types';
import Topic from './Topic';

const TopicList = ({ topics, onUpVoteCallBack, onDownVoteCallBack}) => (
  <div>
    <ol className="list-group">
      {topics.map(topic => (
        <Topic
          key={topic.id}
          onUpVoteCallBack={() => onUpVoteCallBack(topic.id, topic.upVotes + 1)}
          onDownVoteCallBack={() => onDownVoteCallBack(topic.id, topic.downVotes + 1)}
          {...topic}
          />
      ))}
    </ol>
  </div>
);

TopicList.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    upVotes: PropTypes.number.isRequired,
    downVotes: PropTypes.number.isRequired
  })).isRequired,
  onUpVoteCallBack: PropTypes.func.isRequired,
  onDownVoteCallBack: PropTypes.func.isRequired
};

export default TopicList;
