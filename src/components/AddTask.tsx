"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { useCreateTask } from "@/api/hooks";
import { Button } from ".";

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
      <Button
        variant="contained"
        color="primary"
        isLoading={createTask.isPending}
        disabled={!taskTitle}
      >
        ثبت
      </Button>
    </form>
  );
};

export default AddTask;
