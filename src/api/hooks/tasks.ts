import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { createTask, deleteTask, getTasks, updateTask } from "@/api/https";
import { Filter, Task } from "@/interfaces";

// export const useGetTasks = () => {
//   const pageSize = 10;
//   return useInfiniteQuery({
//     initialPageParam: 1,
//     queryKey: ["tasks"],
//     queryFn: ({ pageParam }) => getTasks({ page: Number(pageParam), pageSize }),
//     getNextPageParam: (lastPage, allPages) => {
//       const currentTotal = allPages.reduce(
//         (acc, curr) => curr.data.data.tasks.length + acc,
//         0,
//       );
//       const totalCount = lastPage.data.data.total;

//       if (currentTotal < totalCount) {
//         const pageNumber = currentTotal / pageSize;
//         return pageNumber + 1;
//       } else {
//         return null;
//       }
//     },
//   });
// };

export const useGetTasks = (filter?: Filter) => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: () => getTasks(filter),
    select: (res) => res.data.data.tasks,
  });
};

export const useCreateTask = () => {
  return useMutation({
    mutationFn: (title: string) => createTask(title),
  });
};

export const useDeletePermanentlyTask = () => {
  return useMutation({
    mutationFn: (taskId: string) => deleteTask(taskId),
  });
};

export const useUpdateTask = () => {
  return useMutation({
    mutationFn: (data: { task: Partial<Omit<Task, "_id">>; taskId: string }) =>
      updateTask(data.task, data.taskId),
  });
};

export const useDeleteTask = () => {
  return useMutation({
    mutationFn: (taskId: string) => updateTask({ deleted: true }, taskId),
  });
};

export const useCompleteTask = () => {
  return useMutation({
    mutationFn: (taskId: string) => updateTask({ completed: true }, taskId),
  });
};

export const useUnCompleteTask = () => {
  return useMutation({
    mutationFn: (taskId: string) => updateTask({ completed: false }, taskId),
  });
};
