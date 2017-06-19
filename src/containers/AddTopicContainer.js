import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTopic } from '../actions';

class AddTopicContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { error: false };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  componentDidMount() {
    this.textInput.focus();
  }

  onSubmitHandler(e) {
    const { dispatch } = this.props;
    e.preventDefault();

    // blank topic won't be submit
    if (!this.textInput.value.trim()) {
      return;
    }

    // check if string exceed 255 characters
    if (this.textInput.value.trim().length > 255) {
      this.setState({ error: true });
    } else {
      dispatch(addTopic(this.textInput.value.trim()));
      this.setState({ error: false });
      this.textInput.value = '';
    }
  }

  render() {
    let formInputClass = "form-group " + (this.state.error? "has-error": "");
    let errorMsgLabelClass = this.state.error? "": "invisible";

    return (
      <div>
        <form className="form-horizontal" onSubmit={this.onSubmitHandler}>
          <div className={formInputClass}>
            <label>Topic:</label>
            <textarea className="form-control"
                      rows="5"
                      placeholder="A topic doesn't exceed 255 characters."
                      ref={input => this.textInput = input}
              />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-default">
              Submit
            </button>
            <label
              className={errorMsgLabelClass}> * A topic doesn't exceed 255 characters
            </label>
          </div>
        </form>
      </div>
    );
  }
}

AddTopicContainer = connect()(AddTopicContainer);
export default AddTopicContainer;
