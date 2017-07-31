import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Topic from './Topic';
import * as env from '../constants/env';

/* eslint-disable react/jsx-filename-extension */
class TopicList extends Component {

  componentDidMount() {
    const { fetchTopics, receiveUpdatedTopic, receiveNewTopic } = this.props;
    fetchTopics();
    const urlToChangeStream = `${env.API_URL}/change-stream?'
        + '_format=event-stream&access_token=${env.ACCESS_TOKEN}`;
    this.evtSource = new EventSource(urlToChangeStream); // eslint-disable-line no-undef
    this.evtSource.addEventListener('data', (msg) => {
      const payload = JSON.parse(msg.data);
      if (payload.type === 'create') {
        receiveNewTopic(payload.data);
      } else if (payload.type === 'update') {
        receiveUpdatedTopic(payload.data);
      }
    });
  }

  componentDidUnMount() {
    this.evtSource.close();
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
  receiveUpdatedTopic: PropTypes.func.isRequired,
  receiveNewTopic: PropTypes.func.isRequired,
};

export default TopicList;
