import { useParams } from 'react-router-dom';

const PersonalizedInvite = () => {
  const { id } = useParams();

  return (
    <>
      <h1>Welcome to personalized page!</h1>
      <p>
        Nice to meet you,
        {id}
      </p>
    </>
  );
};

export default PersonalizedInvite;
