import { useParams } from 'react-router-dom';

const PersonalizedMessage = () => {
  const { id } = useParams();

  return (
    <section className="lead text-center text-lg leading-10">
      <p>
        한 보드게임 모임에서 시작된
        <br />
        한 인연이 결혼하여 부부가 됩니다.
        <br />
        {id}님을 초대하여 새로운 시작을 축복 해주시면 감사하겠습니다.
      </p>
    </section>
  );
};

export default PersonalizedMessage;
