"use client";

import InfiniteScroll from "react-infinite-scroll-component";

import { Task } from "./";
import { useGetTasks } from "@/api/hooks";

const TasksList = () => {
  const { data, isFetching, fetchNextPage, hasNextPage } = useGetTasks();

  const tasks = data?.pages.reduce(
    (acc: Task[], page) => acc.concat(page.data.data.tasks),
    [],
  );

  return (
    <div className="mt-4">
      <InfiniteScroll
        dataLength={tasks?.length || 0}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={
          <div className="space-y-4 animate-pulse">
            {Array.from({ length: 10 }).map((_, index) => (
              <div className="flex items-center gap-x-2" key={index}>
                <div className="border-2 border-slate-400 h-4 w-4 rounded-full"></div>
                <div className="h-1.5 w-16 bg-slate-400 rounded-lg"></div>
              </div>
            ))}
          </div>
        }
        
        className="space-y-4"
      >
        {tasks?.map((task) => <Task key={task._id} task={task} />)}
      </InfiniteScroll>
    </div>
  );
};

export default TasksList;
