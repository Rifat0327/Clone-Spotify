import React from "react";
import { IMusicItem } from "../model/types";
import { Link } from "react-router";

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
      <div className="size-[140px] max-md:size-[100px]">
        <img
          className="w-full h-full object-cover"
          src={props.item.image}
          alt=""
        />
      </div>
      {props.renderDescription(props.item)}
      <div className="absolute w-10 h-10 bg-green-5 top-1/2 left-1/2 -translate-1/2"></div>
    </Link>
  );
};

export default MusicCard;
