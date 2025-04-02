import React from "react";

interface IProps {
  title: string;
  subTitle: string;
  renderAction?: () => React.ReactNode;
}

const SidebarActionItem: React.FC<IProps> = ({
  title,
  subTitle,
  renderAction,
}) => {
  return (
    <div className="flex flex-col bg-gray-900  rounded py-4 px-5">
      <h3 className="font-bold text-md/[129%] text-white mb-3 max-md:text-sm2 max-md:mb-[5px]">
        {title}
      </h3>
      <span className="font-normal text-sm2/[124%] text-white inline-block mb-5 max-md:text-sm max-md:mb-2">
        {subTitle}
      </span>
      {renderAction && renderAction()}
    </div>
  );
};

export default SidebarActionItem;
