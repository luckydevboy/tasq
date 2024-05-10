"use client";

import { Fragment, ReactNode, useRef } from "react";
import { useClickAway } from "react-use";
import { cx } from "class-variance-authority";

type Props = {
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  className?: string;
};

const Modal = ({
  children,
  footer,
  title,
  isOpen,
  handleClose,
  className,
}: Props) => {
  const ref = useRef(null);

  useClickAway(ref, () => {
    handleClose();
  });

  if (isOpen) {
    return (
      <div>
        <div className="fixed inset-0 bg-black/25"></div>
        <div
          className="bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg w-full max-w-[450px]"
          ref={ref}
        >
          {title && <h1 className="text-lg font-bold mb-4">{title}</h1>}
          {children}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Modal;
