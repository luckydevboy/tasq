import { AxiosResponse } from "axios";
import { Task } from "@/interfaces";
import { axios } from "@/api/axiosInstance";

export const getTasks = async ({
  page,
  pageSize,
}: {
  page: number;
  pageSize: number;
}): Promise<
  AxiosResponse<{
    status: string;
    data: { tasks: Task[]; total: number };
  }>
> => {
  return axios.get("/tasks", { params: { page, pageSize } });
};
