import React from "react";
import NaverMap from "@/components/NaverMap";

const NomadSeoulLandingPage = () => {
  return (
    <div
      className={`flex flex-col min-h-[calc(100vh-45px)] items-center justify-center`}
    >
      <NaverMap />
    </div>
  );
};

export default NomadSeoulLandingPage;
