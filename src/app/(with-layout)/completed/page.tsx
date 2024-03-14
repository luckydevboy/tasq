"use client";

import { Task } from "@/components";
import { useGetTasks } from "@/api/hooks";

// TODO: Maybe better to use TasksList component
const CompletedPage = () => {
  const { data, isLoading } = useGetTasks();

  const tasks = data?.pages.reduce(
    (acc: Task[], page) => acc.concat(page.data.data.tasks),
    [],
  );

  return (
    <div className="space-y-4 py-6 px-4">
      {tasks
        ?.filter((task) => task.completed)
        .map((task) => <Task key={task.id} task={task} />)}
    </div>
  );
};

export default CompletedPage;
