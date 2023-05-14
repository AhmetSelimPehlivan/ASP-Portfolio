import { Routes, Route, useLocation } from "react-router-dom";
import React, { Suspense, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import { CSSTransition } from 'react-transition-group';
import './App.css';

const WelcomePage = React.lazy(() => import('./pages/welcome'));
const WorksPage = React.lazy(() => import('./pages/works'));
const ResumePage = React.lazy(() => import('./pages/Resume'));

function App() {
  const location = useLocation();
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(false);
    setTimeout(() => setShow(true), 500);
  }, [location]);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Navbar/>
        <CSSTransition in={show} classNames="fade" timeout={700} appear>
            <div className="main-container">
              <Routes>
                  <Route exact path="/" element={<WelcomePage/>}/>
                  <Route path="/works" element={<WorksPage/>} />
                  <Route path="/resume" element={<ResumePage/>} />
              </Routes>
            </div>
        </CSSTransition>
      <Footer/>
    </Suspense>
  );
}

export default App;
