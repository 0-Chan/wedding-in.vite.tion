import { useParams } from 'react-router-dom';

const PersonalizedInvite = () => {
  const { id } = useParams();

  return (
    <div className="my-4 text-center">
      <h2>어려운 시기에 블라블라</h2>
      <p>{id} 님을 꼭 모시고 싶습니다.</p>
    </div>
  );
};

export default PersonalizedInvite;
