"use client";

import { ReactNode, useRef } from "react";
import { useClickAway } from "react-use";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  className?: string;
};

const Modal = ({ children, title, isOpen, handleClose }: Props) => {
  const ref = useRef(null);

  useClickAway(ref, () => {
    handleClose();
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: "25%" }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black"
          ></motion.div>
          <motion.div
            className="bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg w-full max-w-[450px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={ref}
          >
            {title && <h1 className="text-lg font-bold mb-4">{title}</h1>}
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
