"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { Task } from "../interfaces";

const TasksContext = createContext<{
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
}>({ tasks: [], setTasks: () => {} });

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => useContext(TasksContext);
