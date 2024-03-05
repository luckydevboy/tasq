import { Task } from ".";
import { Task as ITask } from "../interfaces";

type Props = {
  tasks: ITask[];
};

const TasksList = ({ tasks }: Props) => {
  return (
    <div className="space-y-4 my-4">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TasksList;
