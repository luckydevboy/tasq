"use client";

import { Task } from "@/components";
import { useGetTasks } from "@/api/hooks";

// TODO: Maybe better to use TasksList component
const CompletedPage = () => {
  const { data: tasks, isLoading } = useGetTasks();

  return (
    <div className="space-y-4 py-6 px-4">
      {tasks
        ?.filter((task) => task.completed)
        .map((task) => <Task key={task._id} task={task} />)}
    </div>
  );
};

export default CompletedPage;
