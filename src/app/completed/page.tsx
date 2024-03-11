"use client";

import { useEffect } from "react";

import { Task } from "../../components";
import { useTasksContext } from "@/contexts";

// TODO: Maybe better to use TasksList component
const CompletedPage = () => {
  const { tasks, setTasks } = useTasksContext();

  // TODO: put it in the context
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <div className="space-y-4 py-6 px-4">
      {tasks
        .filter((task) => task.completed)
        .map((task) => (
          <Task key={task.id} task={task} />
        ))}
    </div>
  );
};

export default CompletedPage;
