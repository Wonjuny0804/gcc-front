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
