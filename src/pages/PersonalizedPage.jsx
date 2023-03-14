import { useParams } from 'react-router-dom';

const PersonalizedPage = () => {
  const { id } = useParams();
  console.log('🚀 | id:', id);

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

export default PersonalizedPage;
