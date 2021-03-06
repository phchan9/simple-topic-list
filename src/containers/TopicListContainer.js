import { connect } from 'react-redux';
import {
  upVote,
  downVote,
  fetchTopics,
  receiveUpdatedTopic,
  receiveNewTopic,
} from '../actions';
import TopicList from '../components/TopicList';
import { getAllSortedTopicList } from '../reducers';

const mapStateToProps = state => ({
  // always get the top 20 topics
  topics: getAllSortedTopicList(state).slice(0, 20),
});

const mapDispatchToProps = {
  fetchTopics,
  receiveUpdatedTopic,
  receiveNewTopic,
  onUpVoteCallBack: upVote,
  onDownVoteCallBack: downVote,
};

const TopicListContainer = connect(mapStateToProps, mapDispatchToProps)(
  TopicList,
);
export default TopicListContainer;
