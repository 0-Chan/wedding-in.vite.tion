import { useEffect } from 'react';

const { kakao } = window;

const PinnedKakaoMap = () => {
  const mapCenterPosition = new kakao.maps.LatLng(37.56446, 126.995329);
  const weddingHallPosition = new kakao.maps.LatLng(37.564799, 126.995715);

  const markerOptions = {
    size: new kakao.maps.Size(64, 64),
    option: { offset: new kakao.maps.Point(30.5, 60) },
  };

  const markerImage = new kakao.maps.MarkerImage(
    markerOptions.src,
    markerOptions.size,
    markerOptions.option,
  );

  useEffect(() => {
    const mapCanvas = document.getElementById('mapCanvas');
    const options = {
      center: mapCenterPosition,
      level: 4,
    };
    const map = new kakao.maps.Map(mapCanvas, options);

    const marker = new kakao.maps.Marker({
      position: weddingHallPosition,
    });

    marker.setMap(map);
  }, []);

  return (
    <div className="border border-orange-300">
      <div id="mapCanvas" className="h-80 w-full" />
    </div>
  );
};

export default PinnedKakaoMap;
