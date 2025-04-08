import React from "react";
import { IMusicItem } from "../model/types";
import { Link } from "react-router";
import Icon from "@/6_shared/ui/icon/Icon";

interface IProps {
  item: IMusicItem;
  renderDescription: (props: IMusicItem) => React.ReactNode;
}

const MusicCard: React.FC<IProps> = (props) => {
  return (
    <Link
      to={props.item.linkPage}
      className="group relative hover:bg-gray-900 inline-block cursor-pointer p-2 transition duration-300 ease-in-out rounded-[10px]"
    >
      <div className="size-[170px] max-lg:size-[140px] max-md:size-[100px]">
        <img
          className="w-full h-full object-cover"
          src={props.item.image}
          alt=""
        />
      </div>
      {props.renderDescription(props.item)}
      <div className="absolute transition duration-300 ease-in-out hover:scale-105 rounded-full w-12 h-12 bg-green-500 top-1/2 right-4 translate-y-full opacity-0 group-hover:translate-0 group-hover:opacity-100 flex justify-center items-center">
        <Icon classes="w-6 h-6 text-black" icon="/src/6_shared/icons/play.svg" />
      </div>
    </Link>
  );
};

export default MusicCard;
