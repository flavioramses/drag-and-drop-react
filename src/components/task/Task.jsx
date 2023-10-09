import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Task = ({
  content,
  provided: { draggableProps, dragHandleProps, innerRef },
}) => {
  return (
    <li {...draggableProps} {...dragHandleProps} ref={innerRef}>
      <h2>{content}</h2>
    </li>
  );
};

export default Task;
