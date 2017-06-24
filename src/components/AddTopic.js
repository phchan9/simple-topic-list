import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTopic extends Component {

  state = {
    text: '',
    error: false
  };

  onSubmitHandler = (e) => {
    const { addTopic  } = this.props;
    const text = this.state.text.trim();
    e.preventDefault();

    // blank topic won't be submit
    if (!text.length) {
      return;
    }
    // check if string exceed 255 characters
    else if (text.length > 255) {
      this.setState({ error: true });
    } else {
      addTopic(text);
      this.setState({ error: false });
      this.setState({ text: ''});
    }
  }

  onChangeHandler = (e) => {
    this.setState({ text: e.target.value});
  }

  render() {
    let formInputClass = "form-group " + (this.state.error? "has-error": "");
    let errorMsgLabelClass = "error " + (this.state.error? "": "invisible");

    return (
      <div>
        <form className="form-horizontal" onSubmit={this.onSubmitHandler}>
          <div className={formInputClass}>
            <label>Topic:</label>
            <textarea className="form-control"
                      rows="5"
                      placeholder="A topic doesn't exceed 255 characters."
                      type="text"
                      autoFocus="true"
                      value={this.state.text}
                      onChange={this.onChangeHandler}
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

AddTopic.propTypes = {
  addTopic: PropTypes.func.isRequired
};

export default AddTopic;
