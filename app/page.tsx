"use client";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Task } from "@/app/interfaces";
import { AddTask, TasksList } from "./components";

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const handleSubmit = (taskTitle: string) => {
    const newTask = {
      title: taskTitle,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      completed: false,
    };

    const newTasks = [newTask, ...tasks];

    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  return (
    <main className="flex-grow p-4">
      <AddTask handleSubmit={handleSubmit} />
      <TasksList tasks={tasks} />
    </main>
  );
};

export default Home;
