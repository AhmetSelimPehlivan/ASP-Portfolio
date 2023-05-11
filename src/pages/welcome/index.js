import { useState, useEffect, useRef } from 'react';
import ScWelcome from './ScWelcome';
import ASP from '../../assets/img/asp_img.png';
import Navbar from '../../components/Navbar';
import WorkBox from '../../components/WorkBox';
import Footer from '../../components/Footer/Footer';
import { CSSTransition } from 'react-transition-group';

const welcome = () => {
  
    return (
        <ScWelcome>
          <Navbar/>
          <div className='main'>
            <header className='me'>
              <div>
                <h1>Ahmet Selim Pehlivan</h1>
                <p>Software developer with expertise in AI, deep learning, machine learning, web apps, and AR/VR games. 
                  Dedicated to delivering high-quality results and enjoys solving complex problems. 
                  Expert in artificial intelligence, image processing, and web applications, always looking for creative solutions for end-users.
                  Please feel free to contact me if you have anything to convey!</p>
              </div>
              <div>
                <img className='myImage' alt='MyImage' src={ASP}/>
              </div>
            </header>
            <section className='work'>
              <h1>My Works</h1>
              <div className='workbox-container'>
                <WorkBox/>
                <WorkBox/>
              </div>
            </section>
            <section className='interest'>
              <h1>Interest</h1>
              <div>    
                <CSSTransition
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>
                  <div className='interest-1'>
                    <h3>Machine Learning</h3>
                    <p>Software developer with expertise in AI, deep learning, machine learning, web apps, and AR/VR games. Dedicated to delivering high-quality results and enjoys solving complex problems. Expert in artificial intelligence, image processing, and web applications, always looking for creative solutions for end-users. Please feel free to contact me if you have anything to convey!</p>
                  </div>
                </CSSTransition>
                <div className='interest-2'>
                    <h3>Deep Learning</h3>
                    <p>Software developer with expertise in AI, deep learning, machine learning, web apps, and AR/VR games. Dedicated to delivering high-quality results and enjoys solving complex problems. Expert in artificial intelligence, image processing, and web applications, always looking for creative solutions for end-users. Please feel free to contact me if you have anything to convey!</p>
                </div>
                <div className='interest-3'>
                    <h3>Web Apps</h3>
                    <p>Software developer with expertise in AI, deep learning, machine learning, web apps, and AR/VR games. Dedicated to delivering high-quality results and enjoys solving complex problems. Expert in artificial intelligence, image processing, and web applications, always looking for creative solutions for end-users. Please feel free to contact me if you have anything to convey!</p>
                </div>
                <div className='interest-4'>
                  <h3>VR/AR Game</h3>
                  <p>Software developer with expertise in AI, deep learning, machine learning, web apps, and AR/VR games. Dedicated to delivering high-quality results and enjoys solving complex problems. Expert in artificial intelligence, image processing, and web applications, always looking for creative solutions for end-users. Please feel free to contact me if you have anything to convey!</p>
                </div>
              </div>
            </section>
          </div>
          <Footer/>
        </ScWelcome>
    );
}
export default welcome;