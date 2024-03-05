import { CheckIcon } from "@heroicons/react/24/outline";
import { Task } from "../interfaces";
import { cx } from "class-variance-authority";

type Props = {
  task: Task;
};

const Task = ({ task }: Props) => {
  return (
    <div className="flex items-center gap-x-2">
      {task.completed ? (
        <CheckIcon className="w-4 h-4 text-green-700 cursor-pointer" />
      ) : (
        <span className="w-4 h-4 rounded-full border-2 border-blue-700 cursor-pointer"></span>
      )}
      <span className={cx(task.completed && "line-through text-black/60")}>
        {task.title}
      </span>
    </div>
  );
};

export default Task;
