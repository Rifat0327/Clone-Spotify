import React from "react";
import Icon from "@/6_shared/ui/icon/Icon";
import Button from "@/6_shared/ui/button/Button";
import SidebarActionList from "./SidebarActionList";
import SidebarLinksList from "./SidebarLinksList";
import { useMediaQuery } from "react-responsive";
import MobileSidebar from "./MobileSidebar";

const Sidebar: React.FC = () => {
  const [sidebarWidth, setSidebarWidth] = React.useState(420);

  const isTablet = useMediaQuery({
    query: "(max-width: 767.98px)",
  });

  function resizeHandler() {
    const size = Math.floor((window.innerWidth / sidebarWidth) * 100);
    if (265 <= size && size <= 420) {
      setSidebarWidth(size);
    }
    if (size > 420) {
      setSidebarWidth(420);
    }
    if (size < 265) {
      setSidebarWidth(265);
    }
  }
  React.useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  if (isTablet) return <MobileSidebar />;

  return (
    <aside
      style={{ "--myIndex": sidebarWidth + "px" } as React.CSSProperties}
      className="sidebar transition-all duration-300 w-[calc(var(--myIndex))] min-w-[250px] max-w-[420px] flex flex-col max-lg:px-3 max-lg:py-2 px-5 py-4 bg-gray-1100 rounded-2xl"
    >
      <div className="flex justify-between items-center cursor-pointer mb-[24px] max-md:mb-2">
        <div className="flex items-center gap-[12px]">
          <Icon
            classes="size-8 max-lg:size-6 text-gray-300"
            icon="/src/6_shared/icons/lib.svg"
          />
          <span className="text-md max-lg:text-sm2 font-bold text-gray-300">
            Your Library
          </span>
        </div>
        <Icon
          classes="size-8 max-lg:size-6 text-gray-300"
          icon="/src/6_shared/icons/add.svg"
        />
      </div>

      <SidebarActionList />
      <SidebarLinksList />

      <Button
        slot={<Icon icon="/src/6_shared/icons/lang.svg" />}
        value="English"
        classes="self-start mt-auto"
      />
    </aside>
  );
};

export default Sidebar;
