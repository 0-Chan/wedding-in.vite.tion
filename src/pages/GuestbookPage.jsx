import GuestComment from '../component/GuestComment';
import Accordion from '../component/Accordion';
import AccordionContent from '../component/AccordionContent';
import Footer from '../component/Footer';

import milkTheCat from '../assets/milkTheCat.webp';

import messageInfo from '../messageInfo';
import { husbandPrivateInfo, wifePrivateInfo } from '../privateInfo';

const GuestbookPage = () => {
  return (
    <>
      <div className="mb-4 text-center">
        <h1 className="mt-5 font-italianno text-2xl font-thin">Message</h1>
        <h2 className="font-gowunDodum text-2xl">메시지</h2>
        <p className="mt-4 font-nanumMyeongjo text-lg">
          청첩장을 받으신 분들께
          <br />
          먼저 감사의 말씀을 드립니다.
        </p>
      </div>
      <GuestComment
        writer={messageInfo[0].writer}
        relationship={messageInfo[0].relationship}
        date="23-03-22"
      >
        {messageInfo[0].message}
      </GuestComment>
      <GuestComment
        writer={messageInfo[1].writer}
        relationship={messageInfo[1].relationship}
        date="23-03-23"
      >
        {messageInfo[1].message}
      </GuestComment>
      <GuestComment
        writer="우유"
        relationship="집 고양이"
        date="23-03-24"
      >
        <img src={milkTheCat} className="inline-block w-32 rounded-md" />
        (메옹)
      </GuestComment>

      <div className="mt-4">
        <Accordion title="📞 번호로 연락하기" open>
          <AccordionContent
            individual={'혼주 ' + husbandPrivateInfo.fatherName}
            info={husbandPrivateInfo.fatherPhone}
          >
            <a
              href={`tel:${husbandPrivateInfo.fatherPhone}`}
              className="rounded-md bg-gray-50 px-3 py-1 text-lg shadow-lg"
            >
              통화
            </a>
          </AccordionContent>
          <AccordionContent
            individual={'혼주 ' + husbandPrivateInfo.motherName}
            info={husbandPrivateInfo.motherPhone}
          >
            <a
              href={`tel:${husbandPrivateInfo.motherPhone}`}
              className="rounded-md bg-gray-50 px-3 py-1 text-lg shadow-lg"
            >
              통화
            </a>
          </AccordionContent>
          <AccordionContent
            individual={'신랑 김영찬'}
            info={husbandPrivateInfo.husbandPhone}
          >
            <a
              href={`tel:${husbandPrivateInfo.husbandPhone}`}
              className="rounded-md bg-gray-50 px-3 py-1 text-lg shadow-lg"
            >
              통화
            </a>
          </AccordionContent>

          <hr class="my-5 h-px border-0 border-dotted bg-gray-200"></hr>

          <AccordionContent
            individual={'혼주 ' + wifePrivateInfo.fatherName}
            info={wifePrivateInfo.fatherPhone}
          >
            <a
              href={`tel:${wifePrivateInfo.fatherPhone}`}
              className="rounded-md bg-gray-50 px-3 py-1 text-lg shadow-lg"
            >
              통화
            </a>
          </AccordionContent>
          <AccordionContent
            individual={'혼주 ' + wifePrivateInfo.motherName}
            info={wifePrivateInfo.motherPhone}
          >
            <a
              href={`tel:${wifePrivateInfo.motherPhone}`}
              className="rounded-md bg-gray-50 px-3 py-1 text-lg shadow-lg"
            >
              통화
            </a>
          </AccordionContent>
          <AccordionContent
            individual={'신부 신윤지'}
            info={wifePrivateInfo.wifePhone}
          >
            <a
              href={`tel:${wifePrivateInfo.wifePhone}`}
              className="rounded-md bg-gray-50 px-3 py-1 text-lg shadow-lg"
            >
              통화
            </a>
          </AccordionContent>
        </Accordion>
      </div>
      <Footer />
    </>
  );
};

export default GuestbookPage;
