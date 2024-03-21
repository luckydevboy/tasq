"use client";

import { TasksList } from "@/components";

const ScheduledPage = () => {
  return (
    <div className="p-4">
      <TasksList filter="scheduled" />
    </div>
  );
};

export default ScheduledPage;
