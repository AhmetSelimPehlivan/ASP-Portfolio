import { Routes, Route, useLocation } from "react-router-dom";
import React, { Suspense, useEffect, useContext } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Transitions from "./context/Transitions";
import './App.css';

const WelcomePage = React.lazy(() => import('./pages/welcome'));
const WorksPage = React.lazy(() => import('./pages/works'));
const ResumePage = React.lazy(() => import('./pages/Resume'));

function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Navbar/>
        <Transitions location={location}>
          <div className="main-container">
            <Routes>
                <Route exact path="/" element={<WelcomePage/>}/>
                <Route path="/works" element={<WorksPage/>} />
                <Route path="/resume" element={<ResumePage/>} />
            </Routes>
          </div>
          </Transitions>
      <Footer/>
    </Suspense>
  );
}

export default App;
