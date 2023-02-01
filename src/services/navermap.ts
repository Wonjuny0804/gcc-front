import { NaverMapConfig } from "../../types/naverMapConfig";

declare const global: {
  naver: NaverService;
};

export interface NaverService {
  maps: NaverMapsService;
}

interface NaverMapOptions {
  center?: { x: number; y: number } | any;
}

interface NaverMapsService {
  LatLng: new (lat: number, lng: number) => unknown;
  Map: new (
    mapDiv: string | HTMLElement,
    mapOptions: NaverMapOptions
  ) => unknown;
}

let loadingPromise: Promise<NaverMapsService> | undefined;

export default class NaverMap {
  config: NaverMapConfig;

  constructor(config: NaverMapConfig) {
    this.config = config;
  }

  private async loadScript(config: NaverMapConfig) {
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

  async drawMap(mapOptions: NaverMapOptions) {
    const naverMapService = await this.loadScript(this.config);

    return new naverMapService.Map(
      "map",
      mapOptions?.center?.x ?? {
        center: new naverMapService.LatLng(37.5172, 127.0473),
        zoom: 14,
      }
    );
  }
}
