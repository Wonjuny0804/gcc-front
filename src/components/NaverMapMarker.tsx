import React, { useEffect } from "react";
import { NaverMapsService } from "types/naverMap";

interface Props {
  position: {
    lat: number;
    lng: number;
  };
  map: NaverMapsService;
  mapServiceInstance: NaverMapsService;
}

const NaverMapMarker = ({ position, map }: Props) => {
  useEffect(() => {
    const marker = new map.Marker({
      position: new map.LatLng(position.lat, position.lng),
    });
  }, []);
  return <div></div>;
};

export default NaverMapMarker;
