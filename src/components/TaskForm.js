import React from "react";
import "../css/TaskForm.css";

class TaskForm extends React.Component {
  textField = React.createRef();
  state = {
    error: null
  };

  handleSubmit = (event) => {
    event.preventDefault();

    var title = event.target.title,
        deadline = event.target.deadline;

        if (!title.value) {
      this.setState({
        error: "Please enter a title for your task."
      });

      title.focus();
    } else {
      this.setState({
        error: null
      });

      this.props.handleSubmit(title.value, deadline.value);
      this.props.handleOverlayToggle();
      event.target.reset();
    }
  }

  handleClose = (event) => {
    event.target.parentNode.parentNode.reset();

    this.props.handleOverlayToggle();
  }

  componentDidUpdate() {
    if (this.props.isVisible) {
      this.textField.current.focus();
    }
  }

  render() {
    return (
      <form className="form" hidden={!this.props.isVisible} onSubmit={this.handleSubmit}>
        <div className="form__inner">
          <h2 className="form__title">New Task</h2>
          
          <div className="form__group">
            <label htmlFor="title" className="form__label">Enter a title: <span className="required">*</span></label>
            <input type="text" id="title" className="form__input" ref={this.textField} />
            {this.state.error && <p className="form__error">{this.state.error}</p>}
          </div>

          <div className="form__group">
            <label htmlFor="deadline" className="form__label">Has to be done until:</label>
            <input type="date" id="deadline" className="form__input" />
          </div>

          <button type="submit" className="form__button form__button--is-blue">Add Task</button>
          <button type="button" className="form__button form__button--is-red" onClick={this.handleClose}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default TaskForm;