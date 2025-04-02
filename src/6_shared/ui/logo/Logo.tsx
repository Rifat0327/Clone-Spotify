import React from "react";
import { Link } from "react-router";

const Logo: React.FC = () => {
  return (
    <div className={"max-md:w-22 flex items-center"}>
      <Link to="/">
        <img src="/src/6_shared/icons/logo.svg" alt="" />
      </Link>
    </div>
  );
};

export default Logo;
