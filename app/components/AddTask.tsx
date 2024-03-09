"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useTasksContext } from "../contexts";

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const { tasks, setTasks } = useTasksContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTaskTitle("");

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
    <form
      onSubmit={onSubmit}
      className="flex justify-between items-center border border-gray-200 rounded-lg p-2 gap-x-2"
    >
      <input
        type="text"
        placeholder="تسک جدیدت رو اینجا بنویس..."
        className="flex-grow text-sm md:text-base outline-none"
        value={taskTitle}
        onChange={handleChange}
      />
      <button className="text-white bg-blue-700 rounded-lg px-4 py-1 text-sm md:text-base font-semibold">
        ثبت
      </button>
    </form>
  );
};

export default AddTask;
