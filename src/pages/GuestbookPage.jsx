import GuestComment from '../component/GuestComment';
import Accordion from '../component/Accordion';
import AccordionContent from '../component/AccordionContent';
import Footer from '../component/Footer';

import milkTheCat from '../assets/milkTheCat.jpg';

import { husbandPrivateInfo, wifePrivateInfo } from '../privateInfo';

const GuestbookPage = () => {
  return (
    <>
      <div className="mb-4 text-center">
        <h1 className="mt-5 font-italianno text-2xl font-thin">Guest Book</h1>
        <h2 className="font-gowunDodum text-2xl">방명록</h2>
        <p className="mt-4 font-nanumMyeongjo text-lg">
          신혼 부부가 전하는 메세지에요.
        </p>
      </div>
      <GuestComment writer="신윤지 (신부)" date="23-03-22">
        잊지 않고 진심 어린 마음으로 축하해주신 모든 분께 감사드립니다. 보내주신
        축복과 진심들로 세상의 밝은 구석이나마 될 수 있도록 행복하게 살겠습니다.
      </GuestComment>
      <GuestComment writer="김영찬 (신랑)" date="23-03-23">
        코로나-19가 끝나 행사가 몰리는 시기에 결혼하게 되어 송구스러운 마음이
        있습니다. 부디 귀한 시간 내주셔서 방문 해주시면 정말 감사하겠습니다!
      </GuestComment>
      <GuestComment writer="우유 (집 고양이)" date="23-03-24">
        <img src={milkTheCat} className="inline-block w-32" />
        (메옹)
      </GuestComment>

      {/* TODO: <a> tag 전화 걸리는지 확인 */}
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
