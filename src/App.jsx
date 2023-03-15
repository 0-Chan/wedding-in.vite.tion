import { Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';

import PersonalizedInvite from './component/PersonalizedInvite';
import BottomNav from './component/BottomNav';
import GreetingConfetti from './component/GreetingConfetti';

function App() {
  return (
    <Suspense fallback={<PacmanLoader color="#F7CB17" />}>
      <div className="mx-auto w-full max-w-xl">
        <GreetingConfetti />
        <Routes>
          <Route path="/invitation/:id" element={<PersonalizedInvite />} />
        </Routes>
        <BottomNav />
      </div>
    </Suspense>
  );
}

export default App;
