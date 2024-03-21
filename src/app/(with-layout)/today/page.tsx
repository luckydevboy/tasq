"use client";

import { TasksList } from "@/components";

const TodayPage = () => {
  return (
    <div className="p-4">
      <TasksList filter="today" />
    </div>
  );
};

export default TodayPage;
