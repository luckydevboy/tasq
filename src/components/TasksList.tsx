"use client";

import { Task } from "./";
import { useGetTasks } from "@/api/hooks";

const TasksList = () => {
  const { data, isLoading } = useGetTasks();

  const tasks = data?.pages.reduce(
    (acc: Task[], page) => acc.concat(page.data.data.tasks),
    [],
  );

  return (
    <div className="space-y-4 mt-4">
      {tasks
        ?.filter((task) => !task.completed)
        .map((task) => <Task key={task.id} task={task} />)}
    </div>
  );
};

export default TasksList;
