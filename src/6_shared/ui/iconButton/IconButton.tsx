import React, { ReactNode } from "react";
import classNames from "classnames";

const IconButton: React.FC<{
  slot: ReactNode;
  cb: () => void;
  classes?: string;
}> = ({ slot, cb, classes }) => {
  return (
    <button
      onClick={cb}
      className={classNames(
        " inline-flex justify-center items-center rounded-full bg-gray-900 text-white cursor-pointer hover:scale-105 transition duration-300 ease-in-out",
        classes
      )}
      type="button"
    >
      {slot}
    </button>
  );
};

export default IconButton;
