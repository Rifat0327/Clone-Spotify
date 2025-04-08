import React from "react";
import { Link } from "react-router";

const Logo: React.FC = () => {
  return (
      <Link className="max-md:basis-[100px] shrink-0  inline-block max-w-none" to="/">
        <img src="/src/6_shared/icons/logo.svg" alt="" />
      </Link>
  );
};

export default Logo;
