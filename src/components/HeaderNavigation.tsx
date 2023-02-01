import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";

const HeaderNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav
      className={`px-4 h-[60px] flex items-center justify-between fixed w-full z-[100] bg-white`}
    >
      <Link href={`/`}>
        <Logo width={36} height={36} />
      </Link>

      <button type="button" onClick={handleButtonClick}>
        <Bars3Icon width={24} height={24} />
      </button>
    </nav>
  );
};

export default HeaderNavigation;
