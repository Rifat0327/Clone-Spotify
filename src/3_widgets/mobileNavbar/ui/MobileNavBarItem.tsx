import React from "react";
import { Link } from "react-router";

interface IProps {
  value: string;
  icon: string;
  link: string;
}

const MobileNavBarItem: React.FC<IProps> = ({ value, icon, link }) => {
  return (
    <Link to={link} className="flex p-2 w-[45px] flex-col items-center gap-1">
      <div className="size-8 max-md:size-5">
        <img className="w-full h-full" src={icon} alt="" />
      </div>
      <span className=" max-sm:text-[8px] max-md:text-xm text-md2 text-white text-nowrap">
        {value}
      </span>
    </Link>
  );
};

export default MobileNavBarItem;
