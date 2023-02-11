import { Address } from "./address";
import { ImageData } from "./image";

export interface NaverMapPointLiteral {
  x: number;
  y: number;
}

export type NaverMapCoordLiteral = NaverMapPointLiteral;

export interface NaverMapsService {
  LatLng: new (lat: number, lng: number) => Coord;
  Map: new (
    mapDiv: string | HTMLElement,
    mapOptions: NaverMapOptions
  ) => naver.maps.Map;
  Marker: new (markerOptions: unknown) => unknown;
  Size: new (width: number, height: number) => unknown;
  Point: new (x: number, y: number) => unknown;
  Size: new (width: number, height: number) => unknown;
}

export interface NaverMapsPoints {
  x: number;
  y: number;
}

export interface NaverMapsLatLng {
  lat: number;
  lng: number;
}

export type Coord = NaverMapsLatLng;

export interface NaverMapMarkerOptions {
  position: Coord;
  draggable?: boolean;
  clickable?: boolean;
  animations?: unknown; // TODO:
  icon?: string | ImageIcon | SymbolIcon | HtmlIcon;
}

export interface NaverMapsMarkerService {}

export interface WeekDate {
  en: string;
  ko: string;
  id: number;
}

export interface OpeningHours {
  day: WeekDate;
  open: string;
  close: string;
}

interface PlaceImageData extends ImageData {
  order: number;
}

export interface MarkerPlace {
  name: string;
  subtitle: string;
  openingHours: OpeningHours[];
  images: PlaceImageData[];
  phoneNumber: string;
  paymentMethods: string[];
  address: Address;
  description: string;
  socialMedia: {
    instagram: string;
    webUrl: string;
  };
}

export interface MapMarker {
  position: Coord;
  type: string;
  place: MarkerPlace;
  icon?: naver.maps.ImageIcon | naver.maps.SymbolIcon | naver.maps.HtmlIcon;
}
