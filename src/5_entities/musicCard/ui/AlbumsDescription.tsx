import React from "react";

const AlbumsDescription: React.FC<{ albumName: string }> = ({ albumName }) => {
  return (
    <>
      <h3 className="text-md/[132%] text-white font-normal">{albumName}</h3>
      <span className="text-xm/[144%] text-gray-300 font-normal">
        albumName
      </span>
    </>
  );
};

export default AlbumsDescription;
