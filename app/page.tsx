"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Task } from "@/app/interfaces";
import { AddTask, TasksList } from "./components";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleSubmit = (taskTitle: string) => {
    setTasks([
      {
        title: taskTitle,
        id: uuidv4(),
        createdAt: new Date().toISOString(),
        completed: false,
      },
      ...tasks,
    ]);
  };

  return (
    <main className="flex-grow p-4">
      <AddTask handleSubmit={handleSubmit} />
      <TasksList tasks={tasks} />
    </main>
  );
}
