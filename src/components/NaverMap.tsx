import React, { useEffect } from "react";
import NaverMapService from "./../services/navermap";

interface Props {
  latlng?: {
    lat: number;
    lng: number;
  };
}

const NaverMap = ({ latlng }: Props) => {
  useEffect(() => {
    const naverMapServiceInstance = new NaverMapService({
      clientID: process.env.NEXT_PUBLIC_NAVER_CLOUD_CLIENT_ID || "",
    });

    naverMapServiceInstance.drawMap({
      center: { x: latlng?.lng, y: latlng?.lat },
    });
  }, []);

  return <div id="map" className={`w-full h-screen`}></div>;
};

export default NaverMap;
