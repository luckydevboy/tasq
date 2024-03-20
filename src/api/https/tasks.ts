import { AxiosResponse } from "axios";

import { Filter, Task } from "@/interfaces";
import { axios } from "@/api/axiosInstance";

// export const getTasks = async ({
//   page,
//   pageSize,
// }: {
//   page: number;
//   pageSize: number;
// }): Promise<
//   AxiosResponse<{
//     status: string;
//     data: { tasks: Task[]; total: number };
//   }>
// > => {
//   return axios.get("/tasks", { params: { page, pageSize } });
// };

export const getTasks = async (
  filter?: Filter,
): Promise<AxiosResponse<{ status: string; data: { tasks: Task[] } }>> => {
  return axios.get(`/tasks/${filter ?? ""}`);
};

export const createTask = async (title: string) => {
  return axios.post("/tasks", { title });
};

export const updateTask = async (
  task: Partial<Omit<Task, "_id">>,
  taskId: string,
) => {
  return axios.put(`/tasks/${taskId}`, task);
};

export const deleteTask = async (taskId: string) => {
  return axios.delete(`/tasks/${taskId}`);
};
