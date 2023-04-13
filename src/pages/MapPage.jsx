import PinnedKakaoMap from '../component/PinnedKakaoMap';
import Footer from '../component/Footer';

import navermapIcon from '../assets/navermapIcon.png';
import kakaomapIcon from '../assets/kakaomapIcon.png';
import tmapIcon from '../assets/tmapIcon.png';

const MapPage = () => {
  return (
    <>
      <div className="mb-4 text-center">
        <h1 className="mt-12 font-italianno text-2xl font-thin">Map</h1>
        <h2 className="font-gowunDodum text-2xl">오시는 길</h2>
        <p className="mt-6 font-nanumMyeongjo text-lg">호텔PJ 1층 뮤즈홀</p>
        <p className="font-nanumMyeongjo text-base text-gray-500">
          서울 중구 마른내로 71
        </p>
      </div>

      <PinnedKakaoMap />
      <div className="p-4">
        <h3 className="mt-3 font-gowunDodum text-xl text-orange-500">
          - 지하철
        </h3>
        <p className="mt-3 font-nanumMyeongjo">
          을지로4가역, 을지로3가역, 충무로역
          <br />
          <span className="text-sm">(도보 5분 소요)</span>
        </p>
        <h3 className="mt-10 font-gowunDodum text-xl text-orange-500">
          - 지도 앱으로 찾기
        </h3>
        <p className="mt-3 font-nanumMyeongjo">
          선호하시는 앱의 길찾기를 써보세요.
        </p>
        <div className="my-3 mt-7 flex justify-evenly font-gowunDodum text-sm">
          <a
            href="https://naver.me/xXrn9Zw0"
            className="rounded-xl bg-gray-50 px-6 py-2"
          >
            <img src={navermapIcon} className="mx-auto h-7 w-7" />
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
        <h3 className="mt-12 font-gowunDodum text-xl text-orange-500">
          - 주차 안내
        </h3>
        <p className="mt-3 font-nanumMyeongjo text-lg">
          <strong>PJ호텔 정문</strong>으로 오시면 호텔 직원이
          <br />
          <span className="mt-2 inline-block">
            주차장 위치를 안내해드립니다!
          </span>
          <span className="mt-2 inline-block">
          * 하객 주차장는 <strong>을지트윈타워</strong>입니다.(2시간 무료주차)
          </span>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default MapPage;
