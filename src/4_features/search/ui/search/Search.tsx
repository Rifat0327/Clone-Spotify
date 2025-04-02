import React from "react";
import classNames from "classnames";
import Icon from "@/6_shared/ui/icon/Icon";
import Modal from "@/6_shared/ui/modal/Modal";
import {
  setBodyOverflowHidden,
  setBodyOverflowVisible,
} from "@/6_shared/helpers/helpers";
import { useMediaQuery } from "react-responsive";
import { createPortal } from "react-dom";

const Search: React.FC = () => {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [isModalOpen, setIsModelOpen] = React.useState<boolean>(false);
  const isMobile = useMediaQuery({
    query: "(max-width: 500px)",
  });

  const openModalHandler = () => {
    setIsModelOpen(true);
    setBodyOverflowHidden();
  };
  const closeModalHandler = () => {
    setIsModelOpen(false);
    setBodyOverflowVisible();
  };

  return (
    <>
      {createPortal(
        <Modal variant="center" isOpen={isModalOpen} close={closeModalHandler}>
          {
            <>
              <div className="text-red-500 text-7xl">Modal</div>
              <button onClick={() => setIsModelOpen(false)} type="button">
                Close
              </button>
            </>
          }
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
        <div
          className={"flex grow-1 items-center rounded-[500px] p-1 bg-gray-900"}
        >
          <div className={"flex text-gray-300 basis-11 h-full  max-md:basis-8"}>
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
        </div>
      )}
    </>
  );
};

export default Search;
