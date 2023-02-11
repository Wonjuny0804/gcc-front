import { MapMarker, NaverMapMarkerOptions } from "types/naverMap";
import { NaverMapConfig } from "../../types/naverMapConfig";
import getMarkerMarkup from "@/lib/navermap/customMarker";
import { formattedAddress } from "@/lib/navermap/addressLib/addressLib";

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

    const navermapMarkers = this.createNaverMapMarkers(markers, map);
    const navermapInfoWindows = this.createInfoWindow(markers);
    this.addMarkersEventListeners(navermapMarkers, navermapInfoWindows);

    naverMapService.Event.addListener(map, "zoom_changed", () => {
      this.updateMarkers(map, navermapMarkers);
    });
    naverMapService.Event.addListener(map, "dragend", () => {
      this.updateMarkers(map, navermapMarkers);
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
    const map = marker.getMap();
    map?.panTo(marker?.getOptions()?.position, {
      duration: 250,
      easing: "linear",
    });
  }

  createNaverMapMarkers(markers: any[], map: naver.maps.Map) {
    if (!this.mapsService) return [];

    const navermapMarkers: naver.maps.Marker[] = [];
    for (let i = 0; i < markers.length; i++) {
      const marker = new this.mapsService.Marker({
        position: new this.mapsService.LatLng(
          markers[i]?.position?.lat,
          markers[i]?.position?.lng
        ),
        map,
        icon: {
          content: getMarkerMarkup(markers[i].type),
          anchor: {
            x: 18,
            y: 48,
          },
        },
      });
      navermapMarkers.push(marker);
    }

    return navermapMarkers;
  }

  addMarkersEventListeners(
    markers: naver.maps.Marker[],
    infoWindows: naver.maps.InfoWindow[]
  ) {
    for (let i = 0; i < markers.length; i++) {
      const marker = markers[i];
      naver.maps.Event.addListener(marker, "click", () => {
        this.markerClickHandler(marker);
        if (!infoWindows) return;

        const infoWindow = infoWindows[i];
        if (infoWindow.getMap()) {
          infoWindow.close();
        } else {
          const map = marker.getMap();
          if (map !== null) infoWindow.open(map, marker);
        }
      });
    }
  }

  createInfoWindow(markers: MapMarker[]) {
    if (!this.mapsService) return [];

    const navermapInfoWindows: naver.maps.InfoWindow[] = [];
    for (let i = 0; i < markers.length; i++) {
      const place = markers[i].place;
      const infoWindow = new this.mapsService.InfoWindow({
        content: [
          `<div class="naver-map-custom-infowindow">`,
          `<div class="info-section__title"><h3 class="info-section__name">${place?.name}</h3><span class="open">영엽 중</span></div>`,
          `<p class="info-section__address">${formattedAddress(
            place.address
          )}</p>`,
          `<p class="info-section__desc">${place.description}</p>`,
          `</div>`,
        ].join(""),
        position: new this.mapsService.LatLng(
          markers[i]?.position?.lat,
          markers[i]?.position?.lng
        ),
        pixelOffset: {
          x: 0,
          y: -6,
        },
        anchorSize: {
          width: 0,
          height: 0,
        },
        backgroundColor: "transparent",
        borderWidth: 0,
      });
      navermapInfoWindows.push(infoWindow);
    }

    return navermapInfoWindows;
  }
}
