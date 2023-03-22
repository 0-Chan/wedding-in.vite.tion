import Footer from '../component/Footer';

import kakaomapIcon from '../assets/kakaomapIcon.png';

const KAKAO_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;

const SharePage = () => {
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(KAKAO_API_KEY);
    console.log(window.Kakao.isInitialized());
  }

  const shareWithKakao = () => {
    shareKakaoLink();
  };

const shareKakaoLink = () => {
    window.Kakao.Link.createCustomButton({
      container: "#kakao-share-button",
      templateId: 91632,
    });
  };

  return (
    <>
      <div className="my-14 text-center font-gowunDodum font-extrabold">
        <button className="border-2 p-4 rounded-md shadow-lg" id="kakao-share-button" onClick={shareWithKakao}>
            <img className="mx-auto" src={kakaomapIcon} alt="카카오톡 공유 버튼" />
            <p>클릭하여 카카오톡 공유</p>
        </button>
      </div>
      <Footer />
    </>
  );
};

export default SharePage;
