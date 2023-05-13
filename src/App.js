import { Routes, Route } from "react-router-dom";
import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';

const WelcomePage = React.lazy(() => import('./pages/welcome'));
const WorksPage = React.lazy(() => import('./pages/works'));
function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Navbar/>
        <div className="main-container">
          <Routes>
              <Route exact path="/" element={<WelcomePage/>}/>
              <Route path="/works" element={<WorksPage/>} />
              <Route path="/resume" element={<WelcomePage/>} />
          </Routes>
        </div>
      <Footer/>
    </Suspense>
  );
}

export default App;
