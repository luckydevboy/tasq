"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Task } from "@/interfaces";

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTaskTitle("");

    const newTask: Task = {
      title: taskTitle,
      id: uuidv4(),
      dueDate: new Date().toISOString(),
      completed: false,
      deleted: false,
    };

    // TODO: Call API for creating a new task
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex justify-between items-center border border-gray-200 rounded-lg p-2 gap-x-2"
    >
      <input
        type="text"
        placeholder="تسک جدیدت رو اینجا بنویس..."
        className="flex-grow  md:text-base outline-none"
        value={taskTitle}
        onChange={handleChange}
      />
      <button disabled={!taskTitle} className="btn-primary-solid">
        ثبت
      </button>
    </form>
  );
};

export default AddTask;
