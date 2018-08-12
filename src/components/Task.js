import React from "react";
import moment from "moment";
import "../css/Task.css";

var TaskItem = (props) => (
  <li className="task">
    <input type="checkbox" className="task__checkbox" defaultChecked={props.task.isCompleted} onClick={() => props.handleTaskUpdate(props.task)} />
    <p className={props.task.isCompleted ? "task__title task__title--is-completed" : "task__title"}>{props.task.title}</p>
    {props.task.deadline && <time className="task__deadline">{moment(props.task.deadline).fromNow()}</time>}
    <button className="task__button" type="button" onClick={() => props.handleTaskDelete(props.task)}>
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M15.516 3.984h3.469v2.016h-13.969v-2.016h3.469l1.031-0.984h4.969zM8.438 11.859l2.156 2.156-2.109 2.109 1.406 1.406 2.109-2.109 2.109 2.109 1.406-1.406-2.109-2.109 2.109-2.156-1.406-1.406-2.109 2.156-2.109-2.156zM6 18.984v-12h12v12c0 1.078-0.938 2.016-2.016 2.016h-7.969c-1.078 0-2.016-0.938-2.016-2.016z"></path>
      </svg>
    </button>
  </li>
);

export default TaskItem;