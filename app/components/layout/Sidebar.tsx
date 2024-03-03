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
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="hidden md:block p-4 space-y-4 w-64 border-l border-gray-200 h-[calc(100svh-65px)]">
      <Link
        href="#"
        className="flex items-center gap-x-2 hover:bg-blue-50 px-4 py-2 rounded-lg"
      >
        <RectangleStackIcon className="text-gray-800 w-6 h-6" />
        <span>همه</span>
      </Link>
      <Link
        href="#"
        className="flex items-center gap-x-2 hover:bg-blue-50 px-4 py-2 rounded-lg"
      >
        <CalendarIcon className="text-gray-800 w-6 h-6" />
        <span>امروز</span>
      </Link>
      <Link
        href="#"
        className="flex items-center gap-x-2 hover:bg-blue-50 px-4 py-2 rounded-lg"
      >
        <ClockIcon className="text-gray-800 w-6 h-6" />
        <span>برنامه‌ریزی شده</span>
      </Link>
      <Link
        href="#"
        className="flex items-center gap-x-2 hover:bg-blue-50 px-4 py-2 rounded-lg"
      >
        <MapPinIcon className="text-gray-800 w-6 h-6" />
        <span>مکانی</span>
      </Link>
      <Link
        href="#"
        className="flex items-center gap-x-2 hover:bg-blue-50 px-4 py-2 rounded-lg"
      >
        <SpeakerXMarkIcon className="text-gray-800 w-6 h-6" />
        <span>بدون هشدار</span>
      </Link>
      <hr className="" />
      <Link
        href="#"
        className="flex items-center gap-x-2 hover:bg-blue-50 px-4 py-2 rounded-lg"
      >
        <CheckIcon className="text-gray-800 w-6 h-6" />
        <span>تکمیل شده</span>
      </Link>
      <Link
        href="#"
        className="flex items-center gap-x-2 hover:bg-blue-50 px-4 py-2 rounded-lg"
      >
        <TrashIcon className="text-gray-800 w-6 h-6" />
        <span>سطل آشغال</span>
      </Link>
    </aside>
  );
};

export default Sidebar;
