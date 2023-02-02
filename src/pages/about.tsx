import React from "react";

const AboutPage = () => {
  return (
    <div className={`px-4 lg:flex lg:flex-col lg:items-center`}>
      <h1
        className={`font-spoqa-medium text-5xl pt-[72px] lg:text-[80px] lg:text-center`}
      >
        디지털 <br className={`lg:hidden`} />
        유목민을 위한 <br /> 유목생활 지도
      </h1>

      <p className={`font-spoqa-light mt-10`}>
        디지털 노마드의 삶을 살아가고자 막상 떠나려고 했을때 어떻게 시작해야될지
        몰라서 망설였던 적이 있었나요? <br />
        아니면 막상 어디를 가려고 할때 마땅한 곳을 찾지 못했서 힘들었던적이
        있었나요?
      </p>

      <p className={`font-spoqa-light mt-10`}>
        <span className={`font-spoqa-regular`}>JB Nomad Seoul</span>은 디지털
        노마드들의 라이프스타일과 경험을 공유하고, 디지털 노마드들의 길을 갈때
        도움을 주는 서비스입니다.
        <br />
        우리는 서로의 경험을 공유하고 자기자신만의 길을 찾아가는 것에 가치가
        있다고 믿습니다. 무엇보다 우리는 서로의 삶을 존중하고, 서로의 삶의
        방식에 대해서 무조건적으로 비판하지 않습니다.
      </p>

      <h2 className={`font-spoqa-medium text-xl mt-10`}>
        경험을 공유하고, 그 경험들을 통해서 새로운 경험과 지식이 창조되는 과정을
        지지하고 지향합니다.
      </h2>
    </div>
  );
};

export default AboutPage;
