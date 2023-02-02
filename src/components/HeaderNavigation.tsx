import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const HeaderNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav
      className={`px-4 h-[60px] flex items-center justify-between w-full z-[100] 
      fixed
      `}
    >
      <Link href={`/`}>
        <Logo width={200} height={36} />
      </Link>

      <button
        type="button"
        onClick={handleButtonClick}
        className={`bg-white p-2 rounded-full shadow`}
      >
        <Bars3Icon width={24} height={24} />
      </button>

      <div
        className={`${
          isOpen ? "absolute" : "hidden"
        } top-0 left-0 bg-[rgba(0,0,0,0.6)] w-screen h-screen `}
      ></div>
      <ul
        className={`p-5 flex flex-col gap-4
        absolute h-screen bg-white font-spoqa top-0
         transition-all duration-300 ${
           isOpen ? "right-0" : "right-[-240px]"
         }  w-[240px]`}
      >
        <li>
          <Link
            href={`/`}
            className="font-spoqa"
            onClick={() => setIsOpen(false)}
          >
            홈
          </Link>
        </li>
        <li>
          <Link href={`/about`} onClick={() => setIsOpen(false)}>
            소개
          </Link>
        </li>
        <li className={`absolute right-5`}>
          <button type="button" onClick={handleButtonClick}>
            <XMarkIcon width={24} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
