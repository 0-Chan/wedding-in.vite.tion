import { useParams } from 'react-router-dom';

const PersonalizedMessage = () => {
  const { id } = useParams();

  return (
    <section className="mb-6 text-center font-nanumMyeongjo leading-9">
      <p>
        한 보드게임 모임에서 시작된
        <br />
        저희 인연이 이어져 결혼을 앞두고 있습니다.
        <br />
        {id}님 앞에서 새로운 시작을 맹세하고자 합니다.
      </p>
    </section>
  );
};

export default PersonalizedMessage;
