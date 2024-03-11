"use client";

import { useEffect } from "react";

import { Task } from "./index";
import { useTasksContext } from "@/contexts";

const TasksList = () => {
  const { tasks, setTasks } = useTasksContext();

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <div className="space-y-4 mt-4">
      {tasks
        .filter((task) => !task.completed)
        .map((task) => (
          <Task key={task.id} task={task} />
        ))}
    </div>
  );
};

export default TasksList;
