import { useParams } from 'react-router-dom';

import AboveTheFold from '../component/AboveTheFold';
import GreetingConfetti from '../component/GreetingConfetti';
import PersonalizedInvite from '../component/PersonalizedInvite';

const HomePage = () => {
  const { id } = useParams();

  return (
    <>
      <GreetingConfetti />
      <AboveTheFold />
      {id ? <PersonalizedInvite /> : ''}
    </>
  );
};

export default HomePage;
