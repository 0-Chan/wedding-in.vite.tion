import { useParams } from 'react-router-dom';

import GreetingConfetti from '../component/GreetingConfetti';
import PersonalizedMessage from '../component/PersonalizedMessage';
import InviteMessage from '../component/InviteMessage';

import waveHand from '../assets/waveHand.gif';
import proposal from '../assets/proposal.png';
const HomePage = () => {
  const { id } = useParams();

  const today = new Date();
  const remainDays =
    today.getMonth() < 3 ? 31 - today.getDate() + 15 : 15 - today.getDate();

  return (
    <>
      <GreetingConfetti />
      <h1 className="mt-5 text-center text-2xl">
        신윤지
        <spann className="mx-4 text-sm">&</spann>
        김영찬
      </h1>
      <div className="mx-4 drop-shadow-lg">
        <img
          src={waveHand}
          alt="윤지와 영찬이 손을 흔든다."
          className="mx-auto scale-90 rounded-lg"
        />
        <p className="text-center">
          <span>2023년 4월 15일(토) 1시 30분</span>
          <br />
          <span>을지로 PJ호텔 뮤즈홀</span>
        </p>
      </div>
      <img
        src={proposal}
        alt="Wedding ring icon"
        className="mx-auto mt-2 h-20 w-20"
      />
      {id ? <PersonalizedMessage /> : <InviteMessage />}
      <div className="mt-16 text-center">{remainDays}일 후에 만나요~!</div>
    </>
  );
};

export default HomePage;
