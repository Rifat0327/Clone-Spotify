import React from "react";
import SidebarActionItem from "./SidebarActionItem";
import ActionBtn from "@/6_shared/ui/actionBtn/ActionBtn";

const SidebarActionList: React.FC = () => {
  const sidebarActionsList = [
    {
      id: "1",
      title: "Create your first playlist",
      subTitle: "It's easy, we'll help you",
      buttonValue: "Create playlist",
      link: "#!",
      cb: () => {},
    },
    {
      id: "2",
      title: "Let's find some podcasts to follow",
      subTitle: "We'll keep you updated on new episodes",
      buttonValue: "Browse podcasts",
      link: "#!",
      cb: () => {},
    },
  ];
  return (
    <div className="sidebar-action-list flex flex-auto h-[133px] overflow-y-auto flex-col gap-5 mb-5 max-md:gap-2">
      {sidebarActionsList.map(
        ({ id, link, title, subTitle, buttonValue, cb }) => (
          <SidebarActionItem
            key={id}
            title={title}
            subTitle={subTitle}
            renderAction={() => (
              <ActionBtn
                classes="self-start"
                variant="secondary"
                value={buttonValue}
                cb={cb}
                link={link}
              />
            )}
          />
        )
      )}
    </div>
  );
};

export default SidebarActionList;
