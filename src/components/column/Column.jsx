import React from "react";
import "./column.scss";
import Task from "../Task/Task";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Column = ({ column, tasks }) => {
  const renderedTasks = tasks.map(
    (task, index) =>
      task && (
        <Draggable key={task.id} draggableId={task.id} index={index}>
          {(provided) => (
            <Task content={task.content} provided={provided} key={task.id} />
          )}
        </Draggable>
      )
  );

  return (
    <Droppable droppableId={column.id} key={column.id}>
      {(provided) => (
        <article
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="column"
        >
          <h1>{column.title}</h1>
          <ul>
            {renderedTasks}
            {provided.placeholder}
          </ul>
        </article>
      )}
    </Droppable>
  );
};

export default Column;
