import { NaverMapMarkerOptions, NaverMapsService } from "types/naverMap";
import { NaverMapConfig } from "../../types/naverMapConfig";

declare const global: {
  naver: NaverService;
};

export interface NaverService {
  maps: NaverMapsService;
}

export interface NaverMapOptions {
  center?: { x: number; y: number } | any;
  zoom?: number;
}

let loadingPromise: Promise<NaverMapsService> | undefined;

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

  async drawMap(mapRef: HTMLDivElement, mapOptions: NaverMapOptions) {
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
  }

  drawMarker(markerOptions: NaverMapMarkerOptions) {
    const { mapsService } = this;
    console.log(mapsService);
    if (!mapsService) return;
  }

  removeMap(map: naver.maps.Map) {
    map.destroy();
  }
}
