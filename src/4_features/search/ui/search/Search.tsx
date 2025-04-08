import React from "react";
import classNames from "classnames";
import Icon from "@/6_shared/ui/icon/Icon";
import Modal from "@/6_shared/ui/modal/Modal";
import { useMediaQuery } from "react-responsive";
import { createPortal } from "react-dom";
import SearchModalForm from "./SearchModalForm";
import IconButton from "@/6_shared/ui/iconButton/IconButton";
import { useAppSelector, useAppDispatch } from "@/1_app/store/hooks";
import { selectorSwitchContentFromHeader } from "@/3_widgets/header/model/slices/switchContentFromHeader";
import { switchActiveButton } from "@/3_widgets/header";

const Search: React.FC = () => {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [isModalOpen, setIsModelOpen] = React.useState<boolean>(false);
  const activeHeaderButton = useAppSelector(selectorSwitchContentFromHeader);
  const dispatch = useAppDispatch();

  const isMobile = useMediaQuery({
    query: "(max-width: 500px)",
  });

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputValue("");
  };

  const openModalHandler = () => {
    setIsModelOpen(true);
  };
  const closeModalHandler = () => {
    setIsModelOpen(false);
  };

  return (
    <>
      {createPortal(
        <Modal isOpen={isModalOpen} close={closeModalHandler}>
          <SearchModalForm />
        </Modal>,
        document.querySelector("#modals")!
      )}

      {isMobile ? (
        <div
          onClick={openModalHandler}
          className={
            " text-gray-300 flex justify-center items-center bg-gray-900 rounded-full size-8"
          }
        >
          <div className="flex w-1/2 h-1/2">
            <Icon icon="/src/6_shared/icons/search.svg" />
          </div>
        </div>
      ) : (
        <form
          action="#"
          onSubmit={submitHandler}
          className={"flex grow-1 items-center rounded-[500px] p-1 bg-gray-900"}
        >
          <div
            className={"flex text-gray-300 basis-11 h-[24px]  max-md:basis-8"}
          >
            <Icon
              classes="basis-full h-full"
              icon="/src/6_shared/icons/search.svg"
            />
          </div>

          <input
            placeholder="What do you want to play?"
            className={
              "text-sm md:text-md2 w-full font-normal px-1 md:mr-5 md:ml-2 outline-0 text-gray-500"
            }
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            type="text"
          />
          <div className="flex pl-1 items-center border-l-[1px] border-gray-600 ">
            <IconButton
              classes="pl-2 pr-3 max-md:pl-1 max-md:pr-2"
              cb={() => {
                dispatch(switchActiveButton("browse"))
              }}
              slot={
                <Icon
                  classes={`w-6 h-6 ${
                    activeHeaderButton === "browse" ? "" : "text-white/50"
                  } `}
                  icon="/src/6_shared/icons/music-library.svg"
                />
              }
            />
          </div>
        </form>
      )}
    </>
  );
};

export default Search;
