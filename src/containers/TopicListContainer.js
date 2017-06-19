import React from 'react';
import { connect } from 'react-redux';
import { upVote, downVote } from '../actions';
import TopicList from '../components/TopicList';
import { getAllSortedTopicList } from '../reducers';

const mapStateToProps = (state) => ({
  // always get the top 20 topics
  votes: getAllSortedTopicList(state).slice(0, 20)
});

const mapDispatchToProps = {
  onUpVoteCallBack: upVote,
  onDownVoteCallBack: downVote
};

const TopicListContainer = connect(mapStateToProps,
                                   mapDispatchToProps)(TopicListContainer);
export default TopicListContainer;
