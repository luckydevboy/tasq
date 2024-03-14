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

export const createTask = async (title: string) => {
  return axios.post("/tasks", { title });
};

export const updateTask = async (task: Partial<Omit<Task, "_id">>, taskId: string) => {
  console.log(task);

  return axios.put(`/tasks/${taskId}`, task);
};

export const deleteTask = async (taskId: string) => {
  return axios.delete(`/tasks/${taskId}`);
};
