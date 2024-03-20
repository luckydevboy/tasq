import { TasksList } from "@/components";

const TrashPage = () => {
  return (
    <div className="p-4">
      <TasksList filter="deleted" />
    </div>
  );
};

export default TrashPage;
