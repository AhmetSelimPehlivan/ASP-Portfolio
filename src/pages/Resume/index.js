import React from 'react';
import ScResume from './ScResume';
import WorkBox from '../../components/WorkBox';
import { gsap } from "gsap"

const Resume = () => {
    gsap.to('.nativeApp', {
      left: "-200%",
      ease: "Strong.easeInOut",
      duration: 1,
      progress: 0.5
    });
    return (
        <ScResume>
            <h1>Resume</h1>
            <div className='workbox-container'>
                <h2>Web Apps</h2>
                <div className='webApps'>
                    { WebApps.map((item) =>          
                        <WorkBox title={item.name} paragraph={item.techUsed} link={item.link} img={item.imgUrl}/>
                    )}
                </div>
                <h2>Native Apps</h2>
                <div className='nativeApp'>
                    { NativeApps.map((item) =>          
                        <WorkBox title={item.name} paragraph={item.techUsed} link={item.link} img={item.imgUrl}/>
                    )}
                </div>
                <h2>Games</h2>
                <div className='games'>
                    { Games.map((item) =>   
                        <WorkBox title={item.name} paragraph={item.techUsed} link={item.link} img={item.imgUrl}/>
                    )}
                </div>
            </div>
        </ScResume>
    );
}
export default Resume;