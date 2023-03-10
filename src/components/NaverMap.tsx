import React, { useEffect, useRef } from "react";
import NaverMapService from "./../services/navermap";
import mockMarkers from "public/mockdata/mockMarkers";

interface Props {
  latlng?: {
    lat: number;
    lng: number;
  };
  children?: React.ReactNode;
}

const NaverMap = ({ latlng }: Props) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current || !window) return;

    const naverMapServiceInstance = new NaverMapService({
      clientID: process.env.NEXT_PUBLIC_NAVER_CLOUD_CLIENT_ID || "",
    });

    naverMapServiceInstance.drawMap(
      mapRef.current,
      {
        center: latlng ?? { lat: 37.566826, lng: 126.9786567 },
      },
      mockMarkers
    );

    return () => {
      if (naverMapServiceInstance.map) naverMapServiceInstance.map.destroy();
    };
  }, []);

  return <div ref={mapRef} id={`map`} className={`w-full h-screen`}></div>;
};

export default NaverMap;
