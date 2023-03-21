import Footer from '../component/Footer';
import GuestComment from '../component/GuestComment';
import Accordion from '../component/Accordion';

const GuestbookPage = () => {
  return (
    <>
      <div className="mb-4 text-center">
        <h1 className="mt-5 font-italianno text-4xl font-thin">Guest Book</h1>
        <h2 className="text-2xl">방명록</h2>
        <p className="mt-4 font-nanumMyeongjo text-lg">
          신혼 부부가 전하는 메세지에요.
        </p>
      </div>
      <GuestComment writer="김영찬" comment="잘살어" date="2023-03-12" />
      <GuestComment writer="신윤지" comment="못살어" date="2023-03-12" />
      <GuestComment writer="우유" comment="노라줘" date="2023-03-12" />

      <div className="mt-4">
        <Accordion title="📞 번호로 연락하기">
          <p>123456</p>
        </Accordion>
      </div>
      <Footer />
    </>
  );
};

export default GuestbookPage;
