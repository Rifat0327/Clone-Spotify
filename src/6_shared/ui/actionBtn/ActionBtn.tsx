import React from "react";
import classNames from "classnames";
import { Link } from "react-router";

interface Props {
  link?: string;
  value: string;
  cb: () => void;
  variant: "primary" | "secondary";
  classes?: string;
}

const ActionBtn: React.FC<Props> = ({ value, cb, variant, classes, link }) => {
  if (link) {
    return (
      <Link
        to={link}
        onClick={cb}
        className={classNames(
          "rounded-[9999px] cursor-pointer transition duration-300 ease-in-out hover:scale-104 hover:bg-gray-300 text-black bg-white font-bold text-nowrap",
          {
            primary: "text-md2 py-3 px-4 max-lg:py-2  max-md:text-sm ",
            secondary: "text-sm2 font-bold text-black py-2 px-4",
          }[variant],
          classes
        )}
      >
        {value}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={cb}
      className={classNames(
        "rounded-[9999px] cursor-pointer transition duration-300 ease-in-out hover:scale-104 hover:bg-gray-300 text-black bg-white font-bold text-nowrap",
        {
          primary: "text-md2 py-3 px-4 max-lg:py-2  max-md:text-sm ",
          secondary: "text-sm2 font-bold text-black py-2 px-4",
        }[variant],
        classes
      )}
    >
      {value}
    </button>
  );
};

export default ActionBtn;
