import { useInfiniteQuery } from "@tanstack/react-query";
import { getTasks } from "@/api/https";

export const useGetTasks = () => {
  const pageSize = 10;
  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["posts"],
    queryFn: ({ pageParam }) => getTasks({ page: Number(pageParam), pageSize }),
    getNextPageParam: (lastPage, allPages) => {
      const currentTotal = allPages.reduce(
        (acc, curr) => curr.data.data.tasks.length + acc,
        0,
      );
      const totalCount = lastPage.data.data.total;

      if (currentTotal < totalCount) {
        const pageNumber = currentTotal / pageSize;
        return pageNumber + 1;
      } else {
        return null;
      }
    },
  });
};
