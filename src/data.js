const data = {
  tasks: {
    "task-1": { id: "task-1", content: "Clean the windows" },
    "task-2": { id: "task-2", content: "Read a chapter from a book" },
    "task-3": { id: "task-3", content: "Go for a walk" },
    "task-4": { id: "task-4", content: "Write a blog post" },
    "task-5": { id: "task-5", content: "Water the plants" },
    "task-6": { id: "task-6", content: "Exercise for 30 minutes" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: [
        "task-1",
        "task-2",
        "task-3",
        "task-4",
        "task-5",
        "task-6",
        "task-7",
      ],
    },
  },

  // Facilitate reordering of the columns
  columnOrder: ["column-1"],
};

export default data;
