"use client";

import {
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  MapPinIcon,
  RectangleStackIcon,
  SpeakerXMarkIcon,
  StarIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { cx } from "class-variance-authority";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <aside className="hidden md:block p-4 space-y-4 w-64 border-l border-gray-200 h-[calc(100svh-65px)]">
      <Link
        href="/"
        className={cx([
          "flex items-center gap-x-2 hover:bg-blue-50 group px-4 py-2 rounded-lg",
          pathname === "/" && "bg-blue-50",
        ])}
      >
        <RectangleStackIcon className="text-gray-800 w-6 h-6 group-hover:text-blue-700" />
        <span className="group-hover:text-blue-700">همه</span>
      </Link>
      <Link
        href="/today"
        className={cx([
          "flex items-center gap-x-2 hover:bg-blue-50 group hover:text-blue-700 px-4 py-2 rounded-lg",
          pathname === "/today" && "bg-blue-50",
        ])}
      >
        <CalendarIcon className="text-gray-800 w-6 h-6 group-hover:text-blue-700" />
        <span className="group-hover:text-blue-700">امروز</span>
      </Link>
      <Link
        href="/scheduled"
        className={cx([
          "flex items-center gap-x-2 hover:bg-blue-50 group hover:text-blue-700 px-4 py-2 rounded-lg",
          pathname === "/scheduled" && "bg-blue-50",
        ])}
      >
        <ClockIcon className="text-gray-800 w-6 h-6 group-hover:text-blue-700" />
        <span className="group-hover:text-blue-700">برنامه‌ریزی شده</span>
      </Link>
      <Link
        href="/location-based"
        className={cx([
          "flex items-center gap-x-2 hover:bg-blue-50 group hover:text-blue-700 px-4 py-2 rounded-lg",
          pathname === "/location-based" && "bg-blue-50",
        ])}
      >
        <MapPinIcon className="text-gray-800 w-6 h-6 group-hover:text-blue-700" />
        <span className="group-hover:text-blue-700">مکانی</span>
      </Link>
      <Link
        href="/silent"
        className={cx([
          "flex items-center gap-x-2 hover:bg-blue-50 group hover:text-blue-700 px-4 py-2 rounded-lg",
          pathname === "/silent" && "bg-blue-50",
        ])}
      >
        <SpeakerXMarkIcon className="text-gray-800 w-6 h-6 group-hover:text-blue-700" />
        <span className="group-hover:text-blue-700">بدون هشدار</span>
      </Link>
      <hr className="" />
      <Link
        href="/completed"
        className={cx([
          "flex items-center gap-x-2 hover:bg-blue-50 group hover:text-blue-700 px-4 py-2 rounded-lg",
          pathname === "/completed" && "bg-blue-50",
        ])}
      >
        <CheckIcon className="text-gray-800 w-6 h-6 group-hover:text-blue-700" />
        <span className="group-hover:text-blue-700">تکمیل شده</span>
      </Link>
      <Link
        href="/trash"
        className={cx([
          "flex items-center gap-x-2 hover:bg-blue-50 group hover:text-blue-700 px-4 py-2 rounded-lg",
          pathname === "/trash" && "bg-blue-50",
        ])}
      >
        <TrashIcon className="text-gray-800 w-6 h-6 group-hover:text-blue-700" />
        <span className="group-hover:text-blue-700">سطل آشغال</span>
      </Link>
    </aside>
  );
};

export default Sidebar;
