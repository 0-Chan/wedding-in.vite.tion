import { Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';

import PersonalizedPage from './pages/PersonalizedPage';
import BottomNav from './component/BottomNav';
import GreetingConfetti from './component/GreetingConfetti';

import { PacmanLoader } from 'react-spinners';

function App() {
  return (
    <Suspense fallback={<PacmanLoader color="#F7CB17" />}>
      <div className="mx-auto w-full max-w-xl">
        <GreetingConfetti />
        <Routes>
          <Route path="/invitation/:id" element={<PersonalizedPage />} />
        </Routes>
        <BottomNav />
      </div>
    </Suspense>
  );
}

export default App;
