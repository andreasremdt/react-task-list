import React from "react";
import Task from "./Task";
import "../css/TaskList.css";

var TaskList = (props) => {
  return (
    <React.Fragment>
      <ol className="tasks">
        {props.tasks.map(task => <Task task={task} handleTaskUpdate={props.handleTaskUpdate} handleTaskDelete={props.handleTaskDelete} key={task.id} />)}
      </ol>
      {props.tasks.length === 0 && <p className="tasks__empty">There are no tasks, yet.</p>}
    </React.Fragment>
  );
};

export default TaskList;