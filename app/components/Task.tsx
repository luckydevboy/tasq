"use client";

import { CheckIcon } from "@heroicons/react/24/outline";
import { cx } from "class-variance-authority";

import { Task } from "../interfaces";
import { useTasksContext } from "../contexts";
import { useState } from "react";

type Props = {
  task: Task;
};

const Task = ({ task }: Props) => {
  const { tasks, setTasks } = useTasksContext();
  const [completed, setCompleted] = useState(task.completed);

  const handleComplete = () => {
    const updatedTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });

    setTasks(updatedTasks);
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
      <span className={cx(task.completed && "line-through text-black/60")}>
        {task.title}
      </span>
    </div>
  );
};

export default Task;
