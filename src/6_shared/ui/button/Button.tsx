import classNames from "classnames";
import React, { ReactNode } from "react";

const Button: React.FC<{
  value: string;
  slot?: ReactNode;
  classes?: string;
}> = ({ value, slot, classes }) => {
  return (
    <button
      className={classNames(
        "w-auto cursor-pointer bg-transparent border border-gray-600 rounded-[9999px] flex gap-2 items-center justify-center text-white text-sm2 font-bold px-3.5 py-1 max-md:px-2.2 max-md:py-1 max-md:gap-1 transition ease-in-out duration-300 hover:scale-105 hover:border-white",
        classes
      )}
      type="button"
    >
      {slot && slot}
      {value}
    </button>
  );
};

export default Button;
