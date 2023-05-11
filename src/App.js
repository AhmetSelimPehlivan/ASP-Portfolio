import { Routes, Route } from "react-router-dom";
import React, { Suspense } from 'react';

const WelcomePage = React.lazy(() => import('./pages/welcome'));
function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<WelcomePage/>}/>
      </Routes>
    </Suspense>
  );
}

export default App;
