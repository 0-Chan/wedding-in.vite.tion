import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';

import PersonalizedPage from './pages/PersonalizedPage';
import BottomNav from './component/BottomNav';
import HeartFace from './component/HeartFace';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full max-w-xl mx-auto">
      <HeartFace />
      <Routes>
        <Route path="/invitation/:id" element={<PersonalizedPage />} />
      </Routes>
      <BottomNav></BottomNav>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank"></a>
      </div>
      <h1 className="bg-orange-400">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
