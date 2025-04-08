import React from "react";
import MusicCard from "./MusicCard";
import { Link } from "react-router";
import { AlbumItem, ArtistItem, IMusicItem, IMusicList, RadioItem } from "../model/types";
import ArtistDescription from "./ArtistDescription";
import RadioDescription from "./RadioDescription";
import AlbumsDescription from "./AlbumsDescription";

const MusicList: React.FC<IMusicList> = ({ title, link, variant, items }) => {
   const renderDescription = (item: IMusicItem) => {
     switch (variant) {
       case "artists":
         return <ArtistDescription artist={(item as ArtistItem).description.artist} />;
       case "radio":
         return <RadioDescription radioName={(item as RadioItem).description.radioName} />;
       case "albums":
         return <AlbumsDescription albumName={(item as AlbumItem).description.albumName} />;
       default:
         return null;
     }
   };
 
   return (
    <section className="relative ">
      <div className="flex justify-between items-center max-lg:mb-1 mb-5">
        <h2 className="font-bold text-lg/[132%] text-white max-md:text-[15px]">{title}</h2>
        <Link 
          className="font-bold text-sm2/[127%] p-3 text-white transition duration-150 ease-in-out hover:text-white/50 hover:scale-105" 
          to={link}
        >
          Show all
        </Link>
      </div>
      
      <div className="relative w-full">
        <div className="music-list overflow-y-hidden overflow-x-auto"> 
          <ul className="flex gap-3" style={{ width: 'max-content' }}>
            {items.map((item) => (
              <li key={item.id} className="shrink-0"> 
                <MusicCard 
                  item={item}
                  renderDescription={() => renderDescription(item)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
 };

export default MusicList;
