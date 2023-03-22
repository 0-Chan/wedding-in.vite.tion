import { useParams } from 'react-router-dom';

import CopyToClipboard from 'react-copy-to-clipboard';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GreetingConfetti from '../component/GreetingConfetti';
import PersonalizedMessage from '../component/PersonalizedMessage';
import InviteMessage from '../component/InviteMessage';
import WeddingGallery from '../component/WeddingGallery';
import AccordionContent from '../component/AccordionContent';
import Footer from '../component/Footer';

import wavingHand from '../assets/wavingHand.webp';
import flower1 from '../assets/flower.webp';
import flower2 from '../assets/flower2.webp';
import Accordion from '../component/Accordion';

import { husbandPrivateInfo, wifePrivateInfo } from '../privateInfo';

const HomePage = () => {
  const { id } = useParams();

  const today = new Date();
  const remainDays =
    today.getMonth() < 3 ? 31 - today.getDate() + 15 : 15 - today.getDate();

  const notify = (copied) =>
    toast.success(`${copied} 복사 되었습니다!`, {
      position: 'bottom-center',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  return (
    <>
      <GreetingConfetti />
      <div className="text-center">
        <h1 className="mt-8 font-gowunDodum text-3xl">
          신윤지
          <span className="mx-5 my-auto text-lg">&</span>
          김영찬
        </h1>
        <div className="mx-4 drop-shadow-lg">
          <img
            src={wavingHand}
            alt="윤지와 영찬이 손을 흔든다."
            className="mx-auto scale-90 rounded-lg"
          />
          <p className="font-nanumMyeongjo text-xl leading-8">
            2023년 4월 15일(토) 1시 30분
            <br />
            호텔PJ 뮤즈홀
          </p>
          <p className="mt-4 font-gowunDodum">
            {husbandPrivateInfo.fatherName} · {husbandPrivateInfo.motherName}
            <span className="text-sm tracking-wide text-gray-600">
              {' '}
              의 삼남{' '}
            </span>
            김영찬
            <br />
            {wifePrivateInfo.fatherName} · {wifePrivateInfo.motherName}
            <span className="text-sm tracking-wide text-gray-600">
              {' '}
              의 차녀{' '}
            </span>
            신윤지
          </p>
        </div>
        <img src={flower1} className="mx-auto h-20 w-28" />
        {id ? <PersonalizedMessage /> : <InviteMessage />}
        <WeddingGallery />
        <div className="mt-8 font-gowunDodum text-xl">
          {remainDays}일 후에 만나요~!
        </div>
        <img src={flower2} className="mx-auto h-20 w-28" />
        <p className="font-nanumMyeongjo">
          혹시 참석이 힘드신 분을 위해
          <br />
          염치 불고하고 계좌 번호를 남깁니다...
        </p>
        <Accordion title="🤵 신랑 측 계좌번호">
          <AccordionContent
            individual={'혼주 ' + husbandPrivateInfo.fatherName}
            info={'국민은행 ' + husbandPrivateInfo.fatherAccount}
          >
            <CopyToClipboard
              text={husbandPrivateInfo.fatherAccount.replaceAll('-', '')}
              onCopy={() => notify('혼주 계좌가')}
            >
              <button className="rounded-md bg-gray-50 px-1.5 py-2 text-sm shadow-lg">
                복사
              </button>
            </CopyToClipboard>
          </AccordionContent>
          <AccordionContent
            individual={'혼주 ' + husbandPrivateInfo.motherName}
            info={'국민은행 ' + husbandPrivateInfo.motherAccount}
          >
            <CopyToClipboard
              text={husbandPrivateInfo.motherAccount.replaceAll('-', '')}
              onCopy={() => notify('혼주 계좌가')}
            >
              <button className="rounded-md bg-gray-50 px-1.5 py-2 text-sm shadow-lg">
                복사
              </button>
            </CopyToClipboard>
          </AccordionContent>
          <AccordionContent
            individual={'신랑 김영찬'}
            info={'토스뱅크 ' + husbandPrivateInfo.husbandAccount}
          >
            <CopyToClipboard
              text={husbandPrivateInfo.husbandAccount.replaceAll('-', '')}
              onCopy={() => notify('신랑 계좌가')}
            >
              <button className="rounded-md bg-gray-50 px-1.5 py-2 text-sm shadow-lg">
                복사
              </button>
            </CopyToClipboard>
          </AccordionContent>
        </Accordion>
        <Accordion title="👰 신부 측 계좌번호">
          <AccordionContent
            individual={'혼주 ' + wifePrivateInfo.fatherName}
            info={'국민은행 ' + wifePrivateInfo.fatherAccount}
          >
            <CopyToClipboard
              text={wifePrivateInfo.fatherAccount.replaceAll('-', '')}
              onCopy={() => notify('혼주 계좌가')}
            >
              <button className="rounded-md bg-gray-50 px-1.5 py-2 text-sm shadow-lg">
                복사
              </button>
            </CopyToClipboard>
          </AccordionContent>
          <AccordionContent
            individual={'혼주 ' + wifePrivateInfo.motherName}
            info={'국민은행 ' + wifePrivateInfo.motherAccount}
          >
            <CopyToClipboard
              text={wifePrivateInfo.motherAccount.replaceAll('-', '')}
              onCopy={() => notify('혼주 계좌가')}
            >
              <button className="rounded-md bg-gray-50 px-1.5 py-2 text-sm shadow-lg">
                복사
              </button>
            </CopyToClipboard>
          </AccordionContent>
          <AccordionContent
            individual={'신부 신윤지'}
            info={'국민은행 ' + wifePrivateInfo.wifeAccount}
          >
            <CopyToClipboard
              text={wifePrivateInfo.wifeAccount.replaceAll('-', '')}
              onCopy={() => notify('신부 계좌가')}
            >
              <button className="rounded-md bg-gray-50 px-1.5 py-2 text-sm shadow-lg">
                복사
              </button>
            </CopyToClipboard>
          </AccordionContent>
        </Accordion>

        <Footer />

        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="light"
        />
      </div>
    </>
  );
};

export default HomePage;
