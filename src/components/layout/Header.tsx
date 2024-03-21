"use client";

import {
  Bars3Icon,
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  MapPinIcon,
  RectangleStackIcon,
  SpeakerXMarkIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import Link from "next/link";
import { cx } from "class-variance-authority";
import { usePathname } from "next/navigation";

const Header = () => {
  const [mobileMenuIsOpen, setMobileMenu] = useState(false);
  const mobileMenuRef = useRef(null);
  const pathname = usePathname();

  useClickAway(mobileMenuRef, () => {
    setMobileMenu(false);
  });

  return (
    <>
      <header className="px-4 md:px-8 py-4 flex items-center gap-x-2 border-b border-gray-200">
        <Bars3Icon
          className="text-gray-800 h-6 w-6 cursor-pointer md:hidden"
          onClick={() => setMobileMenu(true)}
        />
        <h1 className="font-bold text-xl text-blue-700">تسکیو</h1>
      </header>

      <AnimatePresence>
        {mobileMenuIsOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-10 bg-black lg:hidden"
            ></motion.div>
            <motion.div
              initial={{ right: "-75%" }}
              animate={{ right: 0 }}
              exit={{ right: "-75%" }}
              className="absolute top-0 z-20 h-svh w-3/4 rounded-l-lg bg-white p-4 lg:hidden"
              ref={mobileMenuRef}
            >
              <div className="flex h-full flex-col space-y-4">
                <Link
                  href="/"
                  onClick={() => setMobileMenu(false)}
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
                  onClick={() => setMobileMenu(false)}
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
                  onClick={() => setMobileMenu(false)}
                  className={cx([
                    "flex items-center gap-x-2 hover:bg-blue-50 group hover:text-blue-700 px-4 py-2 rounded-lg",
                    pathname === "/scheduled" && "bg-blue-50",
                  ])}
                >
                  <ClockIcon className="text-gray-800 w-6 h-6 group-hover:text-blue-700" />
                  <span className="group-hover:text-blue-700">
                    برنامه‌ریزی شده
                  </span>
                </Link>
                <Link
                  href="/location-based"
                  onClick={() => setMobileMenu(false)}
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
                  onClick={() => setMobileMenu(false)}
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
                  onClick={() => setMobileMenu(false)}
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
                  onClick={() => setMobileMenu(false)}
                  className={cx([
                    "flex items-center gap-x-2 hover:bg-blue-50 group hover:text-blue-700 px-4 py-2 rounded-lg",
                    pathname === "/trash" && "bg-blue-50",
                  ])}
                >
                  <TrashIcon className="text-gray-800 w-6 h-6 group-hover:text-blue-700" />
                  <span className="group-hover:text-blue-700">سطل آشغال</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
