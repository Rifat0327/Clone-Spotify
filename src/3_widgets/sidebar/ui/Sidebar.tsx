import Icon from "@/6_shared/ui/icon/Icon";
import React from "react";
import Button from "@/6_shared/ui/button/Button";
import SidebarActionList from "./SidebarActionList";
import SidebarLinksList from "./SidebarLinksList";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar self-start flex flex-col px-5 py-4 bg-gray-1100 rounded-2xl">
      <div className="flex justify-between items-center cursor-pointer mb-[24px] max-md:mb-2">
        <div className="flex items-center gap-[12px]">
          <Icon
            classes="w-[24px] h-[24px] text-gray-300"
            icon="/src/6_shared/icons/lib.svg"
          />
          <span className="text-md font-bold text-gray-300">Your Library</span>
        </div>
        <Icon
          classes="h-8 w-8 text-gray-300"
          icon="/src/6_shared/icons/add.svg"
        />
      </div>
      <SidebarActionList />
      <SidebarLinksList />
      <Button
        slot={<Icon icon="/src/6_shared/icons/lang.svg" />}
        value="English"
        classes="self-start"
      />
    </aside>
  );
};

export default Sidebar;
