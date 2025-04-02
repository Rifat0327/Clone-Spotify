import React from "react";

const ArtistDescription: React.FC<{ artist: string }> = ({ artist }) => {
  return (
    <>
      <h3 className="text-md/[132%] text-white font-normal">{artist}</h3>
      <span className="text-xm/[144%] text-gray-300 font-normal">Artist</span>
    </>
  );
};

export default ArtistDescription;
