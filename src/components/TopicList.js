import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Topic from './Topic';

/* eslint-disable react/jsx-filename-extension */
class TopicList extends Component {

  componentDidMount() {
    const { fetchTopics } = this.props;
    fetchTopics();
  }

  render() {
    const { topics, onUpVoteCallBack, onDownVoteCallBack } = this.props;

    if (!topics) {
      return <div />;
    }

    return (
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
  }
}

TopicList.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    upVotes: PropTypes.number.isRequired,
    downVotes: PropTypes.number.isRequired,
  })).isRequired,
  onUpVoteCallBack: PropTypes.func.isRequired,
  onDownVoteCallBack: PropTypes.func.isRequired,
  fetchTopics: PropTypes.func.isRequired,
};

export default TopicList;
