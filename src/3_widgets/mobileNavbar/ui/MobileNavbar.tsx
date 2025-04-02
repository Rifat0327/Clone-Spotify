import React from "react";
import { mobileNavBarList } from "../helpers/consts";
import MobileNavBarItem from "./MobileNavBarItem";

const MobileNavbar: React.FC = () => {
  return (
    <section className="fixed container bg-black/85 flex justify-between items-center bottom-0 left-0 w-full z-1000">
      {mobileNavBarList.map(({ value, id, icon, link }) => (
        <MobileNavBarItem icon={icon} link={link} value={value} key={id} />
      ))}
    </section>
  );
};

export default MobileNavbar;
