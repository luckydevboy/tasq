"use client";

import { CheckIcon } from "@heroicons/react/24/outline";
import { cx } from "class-variance-authority";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { Task } from "../interfaces";
import { EditTaskModal } from "@/components";
import { useUpdateTask } from "@/api/hooks";

type Props = {
  task: Task;
};

const Task = ({ task }: Props) => {
  const [completed, setCompleted] = useState(task.completed);
  const [editTaskModalIsOpen, setEditTaskModalIsOpen] = useState(false);
  const queryClient = useQueryClient();
  const updateTask = useUpdateTask();

  // TODO: make a util or put it in the context
  const handleComplete = async () => {
    await updateTask.mutateAsync({
      task: { completed: true },
      taskId: task._id,
    });
    queryClient.invalidateQueries({ queryKey: ["tasks"] });
  };

  return (
    <div className="flex items-center gap-x-2">
      {completed ? (
        <CheckIcon
          onClick={handleComplete}
          className="w-4 h-4 text-green-700 cursor-pointer"
        />
      ) : (
        <span
          onClick={handleComplete}
          className="w-4 h-4 rounded-full border-2 border-blue-700 cursor-pointer"
        ></span>
      )}
      <div
        className={cx(
          "cursor-pointer",
          task.completed && "line-through text-black/60",
        )}
        onClick={() => setEditTaskModalIsOpen(true)}
      >
        {task.title}
      </div>

      <EditTaskModal
        task={task}
        isOpen={editTaskModalIsOpen}
        handleClose={() => setEditTaskModalIsOpen(false)}
      />
    </div>
  );
};

export default Task;
