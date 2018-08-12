import React from "react";
import Header from "./Header";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import "../css/App.css";

class App extends React.Component {
  state = {
    overlayVisible: false,
    tasks: []
  };

  handleTaskUpdate = (taskToUpdate) => {
    var tasks = this.state.tasks.map((task) => {
      if (task.id === taskToUpdate.id) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    this.setState({ tasks });
  }

  handleTaskDelete = (taskToDelete) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter(task => task.id !== taskToDelete.id)
    }));
  };

  handleOverlayToggle = () => {
    this.setState({
      overlayVisible: !this.state.overlayVisible
    });
  }


  handleSubmit = (title, deadline) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, { id: new Date().getTime() , title, deadline, isCompleted: false }]
    }));
  }

  componentWillMount() {
    try {
      var tasks = JSON.parse(localStorage.getItem("tasks"));

      if (tasks) {
        this.setState({ tasks });
      }
    } catch (e) {};
  }
  
  componentDidUpdate() {
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
  }

  render() {
    return (
      <React.Fragment>
        <Header tasks={this.state.tasks} handleOverlayToggle={this.handleOverlayToggle} />
        <TaskForm isVisible={this.state.overlayVisible} handleSubmit={this.handleSubmit} handleOverlayToggle={this.handleOverlayToggle} />
        <TaskList tasks={this.state.tasks} handleTaskUpdate={this.handleTaskUpdate} handleTaskDelete={this.handleTaskDelete} />
      </React.Fragment>
    );
  }
}

export default App;