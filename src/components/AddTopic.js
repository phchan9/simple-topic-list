import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class AddTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      error: false,
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onSubmitHandler(e) {
    const { addTopic } = this.props;
    const text = this.state.text.trim();
    e.preventDefault();

    // blank topic won't be submit
    if (!text.length) {
      return;   // eslint-disable-line
    } else if (text.length > 255) {  // check if string exceed 255 characters
      this.setState({ error: true });
    } else {
      addTopic(text);
      this.setState({ error: false });
      this.setState({ text: '' });
    }
  }

  onChangeHandler(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    const formInputClass = classNames('form-group', {
      'has-error': this.state.error,
    });
    const errorMsgLabelClass = classNames('error', {
      invisible: !this.state.error,
    });

    /* eslint-disable react/jsx-filename-extension */
    return (
      <div>
        <form className="form-horizontal" onSubmit={this.onSubmitHandler}>
          <div className={formInputClass}>
            <label htmlFor="topic">Topic:</label>
            <textarea
              id="topic"
              className="form-control"
              rows="5"
              placeholder="A topic doesn't exceed 255 characters."
              type="text"
              value={this.state.text}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-default">
              Submit
            </button>
            <label
              className={errorMsgLabelClass}
              htmlFor="submit"
            > * A topic does not exceed 255 characters
            </label>
          </div>
        </form>
      </div>
    );
  }
}

AddTopic.propTypes = {
  addTopic: PropTypes.func.isRequired,
};

export default AddTopic;
