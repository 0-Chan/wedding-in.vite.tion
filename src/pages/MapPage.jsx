import ShowKakaoMap from '../component/ShowKakaoMap';
import Footer from '../component/Footer';

import navermapIcon from '../assets/navermapIcon.png';
import kakaomapIcon from '../assets/kakaomapIcon.png';
import tmapIcon from '../assets/tmapIcon.png';

const MapPage = () => {
  return (
    <>
      <div className="mb-4 text-center">
        <h1 className="mt-5 font-italianno text-4xl font-thin">Map</h1>
        <h2 className="text-2xl">오시는 길</h2>
        <p className="mt-4 text-lg">호텔PJ 1층 뮤즈홀</p>
        <p className="text-sm text-gray-500">서울 중구 마른내로 71</p>
      </div>

      <ShowKakaoMap />
      <div className="p-4">
        <h3 className="text-xl font-bold text-orange-400">- 지하철</h3>
        <p>
          <span className="">을지로4가역, 을지로3가역, 충무로역</span>
          <br />
          도보 5분 소요
        </p>
        <h3 className="mt-4 text-lg font-bold text-orange-400">
          - 지도 앱으로 찾기
        </h3>
        <p>선호하시는 앱으로 길찾기 기능을 사용하세요.</p>
        <div className="my-3 flex justify-evenly text-sm">
          <a
            href="https://naver.me/xXrn9Zw0"
            className="rounded-xl bg-gray-50 px-6 py-2"
          >
            <img src={navermapIcon} className="mx-auto h-7 w-8" />
            네이버지도
          </a>
          <a
            href="http://kko.to/ViL-i43k0Z"
            className="rounded-xl bg-gray-50 px-8 py-2"
          >
            <img src={kakaomapIcon} className="mx-auto mb-1 h-6 w-6" />
            카카오맵
          </a>
          <a
            href="https://surl.tmap.co.kr/1567200c"
            className="rounded-xl bg-gray-50 px-11 py-2"
          >
            <img src={tmapIcon} className="mx-auto mb-0.5 h-6 w-6" />
            티맵
          </a>
        </div>
        <h3 className="mt-4 text-lg font-bold text-orange-400">- 주차 안내</h3>
        <p>
          <strong>PJ호텔 정문</strong>으로 오시면 호텔 직원이
          <br />
          주차장 위치를 안내 해드립니다!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default MapPage;
