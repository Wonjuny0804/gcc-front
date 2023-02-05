import React, { useEffect, useRef, useState } from "react";
import NaverMapService from "./../services/navermap";

interface Props {
  latlng?: {
    lat: number;
    lng: number;
  };
  children?: React.ReactNode;
}

const mockMarkers = [
  {
    position: {
      lat: 37.52194423562938,
      lng: 127.05502619060778,
    },
    // icon: {
    //   path: [
    //     "M32 15.7678C32 24.476 20.6355 41.0667 15.8505 44C11.3645 41.36 0 24.476 0 15.7678C0 7.05946 5.77514 0 15.8505 0C25.9258 0 32 7.05946 32 15.7678Z",
    //     "M29.3084 15.84C29.3084 22.9682 23.417 28.7467 16.1495 28.7467C8.88208 28.7467 2.99065 22.9682 2.99065 15.84C2.99065 8.71184 8.88208 2.93333 16.1495 2.93333C23.417 2.93333 29.3084 8.71184 29.3084 15.84Z",
    //   ],
    // },
  },
  {
    position: {
      lat: 37.523040218526454,
      lng: 127.02244698507398,
    },
    icon: {
      url: "./nomadSeoul/marker.png",
      size: {
        width: 22,
        height: 30,
      },
      scaledSize: {
        width: 22,
        height: 30,
      },
    },
  },
  {
    position: {
      lat: 37.504097,
      lng: 127.0583811,
    },
  },
];

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
        center: { lat: 37.566826, lng: 126.9786567 },
      },
      mockMarkers
    );

    // naverMapServiceInstance.drawMarker({
    //   position: { lat: 37.52194423562938, lng: 127.05502619060778 },
    // });

    return () => {
      if (naverMapServiceInstance.map) naverMapServiceInstance.map.destroy();
    };
  }, []);

  return <div ref={mapRef} id={`map`} className={`w-full h-screen`}></div>;
};

export default NaverMap;
