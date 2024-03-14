"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { useCreateTask } from "@/api/hooks";

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const createTask = useCreateTask();
  const queryClient = useQueryClient();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTaskTitle("");
    await createTask.mutateAsync(taskTitle);
    queryClient.invalidateQueries({ queryKey: ["tasks"] });
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
      {/* TODO: Create button component */}
      <button
        disabled={!taskTitle}
        className="btn-primary-solid flex items-center gap-x-1"
      >
        {createTask.isPending && (
          <svg
            className="animate-spin h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        ثبت
      </button>
    </form>
  );
};

export default AddTask;
