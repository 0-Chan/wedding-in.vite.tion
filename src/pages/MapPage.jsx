import Footer from '../component/Footer';

const MapPage = () => {
  return (
    <>
      <h1 className="text-center">Map 오시는 길</h1>
      <p className="text-center">
        호텔PJ 1층 뮤즈홀
        <br />
        서울 중구 마른내로 71
      </p>
      {/* 카카오 api */}
      <h2>지하철</h2>
      <p>을지로4가역, 을지로3가역, 충무로역</p>
      <h2>앱 길찾기</h2>
      <p>선호하시는 앱을 선택하시어 길을 확인 해보세요.</p>
      {/* 네이버지도, 카카오맵, 티맵 */}
      <Footer />
    </>
  );
};

export default MapPage;
