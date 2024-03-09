"use client";

import { useEffect } from "react";

import { Task } from ".";
import { useTasksContext } from "../contexts";

const TasksList = () => {
  const { tasks, setTasks } = useTasksContext();

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <div className="space-y-4 my-4">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TasksList;
