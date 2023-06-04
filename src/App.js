import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import React, { Suspense} from 'react';
import WelcomePage from './pages/welcome';
import WorksPage from './pages/works';
import ResumePage from './pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import { CSSTransition, SwitchTransition } from "react-transition-group";

import './App.css';

function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Navbar/>
      <SwitchTransition className="switch-group">
        <CSSTransition 
          key={location.key} 
          timeout={{ enter: 400, exit: 400 }} 
          classNames="fade">
          <div className="main-container">
            <Routes location={location}>
              <Route exact path="/" element={<WelcomePage/>}/>
              <Route path="/works" element={<WorksPage/>} />
              <Route path="/resume" element={<ResumePage/>} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </CSSTransition>
      </SwitchTransition>
      <Footer/>
    </Suspense>
  );
}

export default App;
