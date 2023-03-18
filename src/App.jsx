import { Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';

import HomePage from './pages/HomePage';
import GuestbookPage from './pages/GuestbookPage';
import InviteMessage from './component/InviteMessage';
import BottomNav from './component/BottomNav';

function App() {
  return (
    <Suspense fallback={<PacmanLoader color="#F7CB17" />}>
      <div className="mx-auto w-full max-w-xl border-2">
        <Routes>
          <Route path="/invitation/" element={<HomePage />} />
          <Route path="/invitation/:id" element={<HomePage />} />
          <Route path="/guest-book" element={<GuestbookPage />} />
          <Route path="/map" element={<InviteMessage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <BottomNav />
      </div>
    </Suspense>
  );
}

export default App;
