import { useParams } from 'react-router-dom';

import GreetingConfetti from '../component/GreetingConfetti';
import PersonalizedMessage from '../component/PersonalizedMessage';
import InviteMessage from '../component/InviteMessage';
import WeddingGallery from '../component/WeddingGallery';
import Footer from '../component/Footer';

import wavingHand from '../assets/wavingHand.gif';
import flower1 from '../assets/flower.png';
import flower2 from '../assets/flower2.png';
import Accordion from '../component/Accordion';

const HomePage = () => {
  const { id } = useParams();

  const today = new Date();
  const remainDays =
    today.getMonth() < 3 ? 31 - today.getDate() + 15 : 15 - today.getDate();

  return (
    <>
      <GreetingConfetti />
      <div className="text-center">
        <h1 className="mt-5 font-sunflower text-3xl">
          신윤지
          <span className="mx-5 my-auto text-base">&</span>
          김영찬
        </h1>
        <div className="mx-4 drop-shadow-lg">
          <img
            src={wavingHand}
            alt="윤지와 영찬이 손을 흔든다."
            className="mx-auto scale-90 rounded-lg"
          />
          <p className="font font-nanumMyeongjo text-xl leading-8">
            2023년 4월 15일(토) 1시 30분
            <br />
            호텔PJ 뮤즈홀
          </p>
        </div>
        <img src={flower1} className="mx-auto mt-2 h-20 w-28" />
        {id ? <PersonalizedMessage /> : <InviteMessage />}
        <WeddingGallery />
        <div className="mt-8 font-sunflower text-xl">
          {remainDays}일 후에 만나요~!
        </div>
        <img src={flower2} className="mx-auto mt-2 h-20 w-28" />
        <p>
          혹시 참석이 힘드신 분을 위해
          <br />
          염치 불고하고 계좌 번호를 남깁니다...
        </p>
        <Accordion title="🤵 신랑 측 계좌번호">
          <p>hmm</p>
        </Accordion>
        <Accordion title="👰 신부 측 계좌번호">
          <p>hmmmmmmmmmmmmmmmmmmmmmmm</p>
        </Accordion>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
