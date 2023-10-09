import React, { useEffect, useState } from "react";
import "./App.css";
import data from "./data";
import Column from "./components/column/Column";
import { DragDropContext } from "react-beautiful-dnd";

const App = () => {
  const [columns, setColumns] = useState(data.columns);
  const onDragEnd = ({ destination, source, draggableId }) => {
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    const column = columns["column-1"];
    const newTaskIds = [...column.taskIds];
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);
    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    setColumns({ ...columns, [newColumn.id]: newColumn });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {data.columnOrder.map((columnId) => {
        const column = columns[columnId];
        const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
};

export default App;
