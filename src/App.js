import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GreetingPage from './components/GreetingPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GreetingPage />} />
      </Routes>
    </>
  );
}

export default App;
