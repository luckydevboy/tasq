"use client";

import { ChangeEvent, FormEvent, useState } from "react";

type Props = {
  handleSubmit: (taskTitle: string) => void;
};

const AddTask = ({ handleSubmit }: Props) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTaskTitle("");
    handleSubmit(taskTitle);
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
