import React from "react";

const RadioDescription: React.FC<{ radioName: string }> = ({ radioName }) => {
  return (
    <>
      <h3 className="text-md/[132%] text-white font-normal">{radioName}</h3>
      <span className="text-xm/[144%] text-gray-300 font-normal">Radio</span>
    </>
  );
};

export default RadioDescription;
