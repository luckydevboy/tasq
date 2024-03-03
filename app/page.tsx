"use client";

import { ChangeEventHandler, useState } from "react";
import { Task } from "@/app/interfaces";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState("");

  const handleChange = (e: ChangeEventHandler<HTMLInputElement>) => {};

  return (
    <main className="flex-grow p-4">
      <div className="flex justify-between items-center border border-gray-200 rounded-lg p-2 gap-x-2">
        <input
          type="text"
          placeholder="تسک جدیدت رو اینجا بنویس..."
          className="flex-grow text-sm md:text-base outline-none"
          value={task}
          name="task"
          onChange={handleChange}
        />
        <button className="text-white bg-blue-700 rounded-lg px-4 py-1 text-sm md:text-base font-semibold">
          ثبت
        </button>
      </div>
    </main>
  );
}
