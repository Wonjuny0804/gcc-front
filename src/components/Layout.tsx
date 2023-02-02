import React from "react";
import HeaderNavigation from "./HeaderNavigation";

interface Props {
  children: React.ReactNode | string;
}

const Layout = ({ children }: Props) => {
  return (
    <main>
      <HeaderNavigation />
      {children}
    </main>
  );
};

export default Layout;
