import { User } from "@/interfaces";
import { AxiosResponse } from "axios";
import { axios } from "../axiosInstance";

export const register = async (data: {
  username: string;
  password: string;
  name: string;
}): Promise<
  AxiosResponse<{ status: "success"; data: { user: User; token: string } }>
> => {
  return await axios.post("/auth/register", data);
};
