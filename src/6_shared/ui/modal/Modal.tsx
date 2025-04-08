import React from "react";
import { IModalProps } from "@/6_shared/model/types";
import classNames from "classnames";

const Modal: React.FC<IModalProps> = ({ children, close, isOpen }) => {
  if (!isOpen) {
    return null;
  }

  function closeModal(e: React.MouseEvent<HTMLElement>) {
    if ((e.target as HTMLElement).classList.contains("overlay")) {
      close();
    }
  }

  return (
    <div
      onClick={closeModal}
      className={classNames(
        "overlay fixed inset-0 z-1000 bg-black/50 backdrop-blur-[3px]"
      )}
    >
      {children}
    </div>
  );
};

export default Modal;
