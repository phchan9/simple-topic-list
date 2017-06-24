import { connect } from 'react-redux';
import { addTopic } from '../actions';
import AddTopic from '../components/AddTopic';

const mapDispatchToProps = {
  addTopic
};

export default connect(null, mapDispatchToProps)(AddTopic);
