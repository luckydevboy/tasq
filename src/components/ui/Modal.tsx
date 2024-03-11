"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { ReactNode, useRef } from "react";
import { useClickAway, useKey } from "react-use";

type Props = {
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
};

const Modal = ({ children, footer, title, isOpen, handleClose }: Props) => {
  const ref = useRef(null);

  useClickAway(ref, () => {
    handleClose();
  });

  useKey("Escape", handleClose);

  if (isOpen) {
    return (
      <div>
        <div className="fixed inset-0 bg-black/50"></div>
        <div
          ref={ref}
          className="absolute top-1/2 right-1/2 p-6 translate-x-1/2 -translate-y-1/2 bg-white rounded-lg"
        >
          {title && (
            <div className="flex items-center justify-between">
              <div>{title}</div>
              <XMarkIcon
                className="w-6 h-6 text-gray-700 cursor-pointer"
                onClick={handleClose}
              />
            </div>
          )}
          <hr className="my-4" />
          {children}
          <hr className="my-4" />
          {footer}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Modal;
