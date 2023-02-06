import { NaverMapMarkerOptions } from "types/naverMap";
import { NaverMapConfig } from "../../types/naverMapConfig";
import getMarkerMarkup from "@/lib/navermap/customMarker";

declare const global: {
  naver: NaverService;
};

export interface NaverService {
  maps: typeof naver.maps;
}

export interface NaverMapOptions {
  center?: { x: number; y: number } | any;
  zoom?: number;
}

type NaverMapsService = typeof naver.maps;

let loadingPromise: Promise<typeof naver.maps> | undefined;

export default class NaverMap {
  config: NaverMapConfig;
  mapsService: NaverMapsService | undefined;
  LatLng: any;
  map: naver.maps.Map | undefined;

  constructor(config: NaverMapConfig) {
    this.config = config;
  }

  async loadScript(config: NaverMapConfig) {
    console.log("loading script", loadingPromise);
    if (!loadingPromise) {
      loadingPromise = new Promise((resolve, reject) => {
        const $script = document.createElement("script");

        $script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${config.clientID}&callback=initMap`;
        $script.defer = true;
        $script.onerror = reject;
        $script.onload = () => {
          if (typeof global.naver.maps !== "undefined") {
            resolve(global.naver.maps);
          }
        };

        document.body.appendChild($script);
      });
    }

    return loadingPromise;
  }

  async drawMap(
    mapRef: HTMLDivElement,
    mapOptions: NaverMapOptions,
    markers?: any[]
  ) {
    if (!this.mapsService) {
      const mapService = await this.loadScript(this.config);
      this.mapsService = mapService;
      console.log(mapService);
    }
    const naverMapService = this.mapsService;

    const map = new naverMapService.Map(
      mapRef,
      mapOptions?.center?.x
        ? mapOptions
        : {
            center: new naverMapService.LatLng(37.5172, 127.0473),
            zoom: 14,
          }
    );

    this.map = map;
    if (!markers) return;

    const navermapMarkers: naver.maps.Marker[] = [];
    for (let i = 0; i < markers.length; i++) {
      const marker = new naverMapService.Marker({
        position: new naverMapService.LatLng(
          markers[i]?.position?.lat,
          markers[i]?.position?.lng
        ),
        map,
        icon: {
          content: getMarkerMarkup(markers[i].type),
          anchor: {
            x: 25,
            y: 50,
          },
        },
      });
      navermapMarkers.push(marker);
    }

    naverMapService.Event.addListener(map, "zoom_changed", () => {
      this.updateMarkers(map, navermapMarkers);
    });

    naverMapService.Event.addListener(map, "dragend", () => {
      this.updateMarkers(map, navermapMarkers);
    });

    // TODO: So this would not work... why?
    // this.drawMarker({
    //   position: new naverMapService.LatLng(
    //     37.52194423562938,
    //     127.05502619060778
    //   ),
    // });
  }

  // TODO: This would not work... why?
  drawMarker(markerOptions: NaverMapMarkerOptions) {
    const { mapsService } = this;
    if (!mapsService) return;

    new mapsService.Marker({
      position: new mapsService.LatLng(37.52194423562938, 127.05502619060778),
      map: this.map,
    });
  }

  removeMap(map: naver.maps.Map) {
    map.destroy();
  }

  updateMarkers(map: naver.maps.Map, markers: naver.maps.Marker[]) {
    const mapBounds = map.getBounds() as naver.maps.LatLngBounds;

    for (let i = 0; i < markers.length; i++) {
      const marker = markers[i];
      const position = marker.getPosition();

      if (mapBounds.hasLatLng(position)) {
        this.showMarker(map, marker);
      } else {
        this.hideMarker(marker);
      }
    }
  }

  showMarker(map: naver.maps.Map, marker: naver.maps.Marker) {
    if (marker?.getMap()) return; // if marker is already on map, do nothing
    marker.setMap(map);
  }

  hideMarker(marker: naver.maps.Marker) {
    if (!marker.getMap()) return; // if marker is already removed, do nothing
    marker.setMap(null);
  }

  markerClickHandler(marker: naver.maps.Marker) {
    console.log("marker clicked");
  }
}
