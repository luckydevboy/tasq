"use client";

import { CheckIcon } from "@heroicons/react/24/outline";
import { cx } from "class-variance-authority";
import { useState } from "react";

import { Task } from "../interfaces";
import { useTasksContext } from "@/contexts";
import { EditTaskModal } from "@/components";
import { title } from "process";

type Props = {
  task: Task;
};

const Task = ({ task }: Props) => {
  const { tasks, setTasks } = useTasksContext();
  const [completed, setCompleted] = useState(task.completed);
  const [editTaskModalIsOpen, setEditTaskModalIsOpen] = useState(false);

  // TODO: make a util or put it in the context
  const handleComplete = () => {
    const updatedTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setCompleted(!completed);
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
