import React from "react";
import moment from "moment";
import "../css/Header.css";

var Header = (props) => {
  var getOpenTasks = props.tasks.filter(task => !task.isCompleted);
  var getTaskLabel = getOpenTasks.length === 1 ? "Task" : "Tasks";
  
  return (
    <header className="header">
      <div>
        <h1 className="header__date">
          {moment().format("dddd")}, <span className="header__day">{moment().format("Do")}</span>
        </h1>
        <p className="header__month">{moment().format("MMMM")}</p>
      </div>

      <p className="header__tasks">
        <b>{getOpenTasks.length}</b> {getTaskLabel}
      </p>
      
      <button type="button" className="header__button" onClick={props.handleOverlayToggle}>
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="white" d="M18.984 12.984h-6v6h-1.969v-6h-6v-1.969h6v-6h1.969v6h6v1.969z"></path>
        </svg>
      </button>
    </header>
  );
};

export default Header;