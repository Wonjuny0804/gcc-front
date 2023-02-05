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

    for (let i = 0; i < markers.length; i++) {
      new naverMapService.Marker({
        position: new naverMapService.LatLng(
          markers[i]?.position?.lat,
          markers[i]?.position?.lng
        ),
        map,
        ...(markers[i]?.icon && {
          icon: {
            ...markers[i]?.icon,
          },
        }),
      });
    }

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
}
