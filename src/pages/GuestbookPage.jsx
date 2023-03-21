import GuestComment from '../component/GuestComment';
import Accordion from '../component/Accordion';
import Footer from '../component/Footer';

import milkTheCat from '../assets/milkTheCat.jpg';

const GuestbookPage = () => {
  return (
    <>
      <div className="mb-4 text-center">
        <h1 className="mt-5 font-italianno text-2xl font-thin">Guest Book</h1>
        <h2 className="font-nanumMyeongjo text-3xl">방명록</h2>
        <p className="mt-4 font-nanumMyeongjo text-lg">
          신혼 부부가 전하는 메세지에요.
        </p>
      </div>
      <GuestComment writer="신윤지 (신부)" date="2023-03-22">
        잊지 않고 진심 어린 마음으로 축하해주신 모든 분께 감사드립니다. 보내주신
        축복과 진심들로 세상의 밝은 구석이나마 될 수 있도록 행복하게 살겠습니다.
      </GuestComment>
      <GuestComment writer="김영찬 (신랑)" date="2023-03-23">
        귀한 시간 내주셔서 방문 해주시면 정말 감사하겠습니다. 이 은혜 잊지
        않겠습니다.
      </GuestComment>
      <GuestComment writer="우유 (집 고양이)" date="2023-03-24">
        <img src={milkTheCat} className="inline-block w-36" />
        (메옹)
      </GuestComment>

      <div className="mt-4">
        <Accordion title="📞 번호로 연락하기" open>
          <p>123456</p>
        </Accordion>
      </div>
      <Footer />
    </>
  );
};

export default GuestbookPage;
