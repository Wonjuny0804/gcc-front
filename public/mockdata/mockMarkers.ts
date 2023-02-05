const mockMarkers = [
  {
    position: {
      lat: 37.52194423562938,
      lng: 127.05502619060778,
    },
    type: "cafe",
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
    type: "cafe",
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
    type: "cafe",
    icon: {
      content: `<div class="naver-map-custom-marker"><div class="naver-map-custom-marker-inner"></div></div>`,
      anchor: {
        x: 25,
        y: 50,
      },
    },
  },
];

export default mockMarkers;
