import React from "react";
import Logo from "@/6_shared/ui/logo/Logo";
import ActionBtn from "@/6_shared/ui/actionBtn/ActionBtn";
import { Link, useLocation, useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";
import Search from "@/4_features/search";
import IconButton from "@/6_shared/ui/iconButton/IconButton";
import Icon from "@/6_shared/ui/icon/Icon";

const Header: React.FC = () => {

  const location = useLocation();
  const navigate = useNavigate()

  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  return (
    <header className={"navbar max-lg:py-3 py-5 bg-black"}>
      <div className={"flex justify-between gap-2 items-center"}>
        <Logo />
        <div
          className={
            "flex max-[500.99px]:ml-auto md:basis-[546px] gap-2 items-stretch"
          }
        >
          <IconButton
            classes="size-12 max-md:size-8"
            cb={() => {
              navigate("/")
            }}
            slot={
              <Icon
                classes={`w-1/2 h-1/2 ${
                  location.pathname === "/" ? "" : "text-white/50"
                } `}
                icon="/src/6_shared/icons/home.svg"
              />
            }
          />

          <Search />
        </div>
        <div className="flex items-center gap-2">
          {!isMobile && (
            <Link
              className="text-md p-3 hover:text-white hover:scale-105 transition ease-in-out duration-300 text-gray-300 font-bold text-nowrap"
              to="#!"
            >
              Sign out
            </Link>
          )}

          <ActionBtn
            link="#!"
            variant="primary"
            cb={() => {
              console.log("Log in");
            }}
            value="Log in"
            classes="px-8 py-4"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
