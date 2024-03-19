"use client";

import { Filter } from "@/interfaces";
import { Task } from "./";
import { useGetTasks } from "@/api/hooks";

type Props = { filter?: Filter };

const TasksList = ({ filter }: Props) => {
  const { data: tasks, isFetching } = useGetTasks(filter);

  return (
    <>
      {isFetching ? (
        <div className="space-y-4 mt-4 animate-pulse">
          {Array.from({ length: 10 }).map((_, index) => (
            <div className="flex items-center gap-x-2" key={index}>
              <div className="border-2 border-slate-400 h-4 w-4 rounded-full"></div>
              <div className="h-1.5 w-16 bg-slate-400 rounded-lg"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-4 space-y-4">
          {tasks?.map((task) => <Task key={task._id} task={task} />)}
        </div>
      )}
    </>
  );
};

export default TasksList;
