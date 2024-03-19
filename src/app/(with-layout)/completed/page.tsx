"use client";

import { TasksList } from "@/components";

const CompletedPage = () => {
  return (
    <div className="p-4">
      <TasksList filter="completed" />
    </div>
  );
};

export default CompletedPage;
