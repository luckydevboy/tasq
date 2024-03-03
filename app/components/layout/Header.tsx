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

const Header = () => {
  const [mobileMenuIsOpen, setMobileMenu] = useState(false);
  const mobileMenuRef = useRef(null);

  useClickAway(mobileMenuRef, () => {
    setMobileMenu(false);
  });

  return (
    <>
      <header className="px-4 md:px-8 py-4 flex items-center gap-x-2 border-b border-gray-200">
        <Bars3Icon
          className="text-gray-800 h-6 w-6 cursor-pointer"
          onClick={() => setMobileMenu(true)}
        />
        <h1 className="font-bold text-xl text-gray-800">تسکیو</h1>
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
              className="absolute top-0 z-20 h-svh w-3/4 rounded-l-lg bg-white p-8 lg:hidden"
              ref={mobileMenuRef}
            >
              <div className="flex h-full flex-col space-y-4">
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
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
