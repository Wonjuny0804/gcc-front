const mockMarkers = [
  {
    position: {
      lat: 37.52194423562938,
      lng: 127.05502619060778,
    },
    type: "cafe",
    place: {
      name: "세컨드라이브러리",
      subtitle: "코워킹스페이스와 카페가 결합된 새로운 공간",
      openingHours: [
        {
          day: {
            en: "mon",
            ko: "월",
            id: 1,
          },
          open: "09:00",
          close: "22:00",
        },
        {
          day: {
            en: "tue",
            ko: "화",
            id: 2,
          },
          open: "09:00",
          close: "22:00",
        },
        {
          day: {
            en: "wed",
            ko: "수",
            id: 3,
          },
          open: "09:00",
          close: "22:00",
        },
        {
          day: {
            en: "thu",
            ko: "목",
            id: 4,
          },
          open: "09:00",
          close: "22:00",
        },
        {
          day: {
            en: "fri",
            ko: "금",
            id: 5,
          },
          open: "09:00",
          close: "22:00",
        },
        {
          day: {
            en: "sat",
            ko: "토",
            id: 6,
          },
          open: "10:00",
          close: "20:00",
        },
        {
          day: {
            en: "sun",
            ko: "일",
            id: 0,
          },
          open: "10:00",
          close: "20:00",
        },
      ],
      images: [
        {
          order: 1,
          url: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220525_73%2F1653450803359OKljp_JPEG%2F32F81D9D-2B4F-44A3-A249-F90D420B1890.JPG",
        },
        {
          order: 2,
          url: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200413_90%2F1586745883178oXTYJ_JPEG%2F572079C4-9D02-43D7-93C4-EE030B0EDB57.JPG",
        },
        {
          order: 3,
          url: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220525_94%2F1653450803374oxzMR_JPEG%2FAC2850B3-7051-4356-A1E0-3A568B26C8C6.JPG",
        },
      ],
      phoneNumber: "0507-1356-1278",
      paymentMethods: ["cash", "card", "zeroPay"],
      address: {
        roadAddress: "서울 강남구 영동대로137길 6 1층",
        jibunAddress: "청담동 68-16",
        postalCode: "06072",
      },
      description: `세컨드라이브러리(Second Library)는 코워킹스페이스와 카페가 결합된 새로운 형태의 작업공간입니다.

      누구에게나 오픈되어있는 작업공간으로 일반 카페보다는 조용하고 쾌적하며, 적당한 수준의 화이트노이즈로 인해 공유오피스, 스터디카페, 독서실보다는 집중력을 높일 수 있습니다.
      
      카페처럼 캐주얼한 분위기의 공간을 개인작업실처럼 이용해보세요.
      시간단위로 이용이 가능할 뿐만아니라 1일권, 10일권, 20일권, 30일권 등 정액권 이용시 보다 자유롭게 공간이용이 가능하며 가격적인 혜택또한 누릴 수 있습니다.
      
      모든 테이블에 전원콘센트가 설치되어 있어 노트북 등 전자기기 이용이 편리합니다.
      
      매장 이용시 인쇄, 복사, 스캔, 팩스가 가능한 복합기를 무료로 이용하실 수 있으며 무료 와이파이가 제공됩니다.`,
      socialMedia: {
        instagram: "http://www.instagram.com/second_library",
        webUrl: "",
      },
    },
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
