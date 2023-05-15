import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import ScWorks from './ScWorks';
import WorkBox from '../../components/WorkBox';
import { NativeApps, WebApps, Games } from '../../constants/works';

const Works = () => {
    useEffect(() =>{
        AOS.init({
          duration: 400,
          easing: "ease",
          once: false,
        });
      });
    return (
        <ScWorks>
            <div className='workbox-container'>
                <h2 data-aos="fade" data-aos-delay="100">Web Apps</h2>
                <div className='webApps' data-aos="fade-up" data-aos-delay="150">
                    { WebApps.map((item) =>          
                        <WorkBox title={item.name} paragraph={item.techUsed} link={item.link} img={item.imgUrl}/>
                    )}
                </div>
                <h2 data-aos="fade" data-aos-delay="100">Native Apps</h2>
                <div className='nativeApp' data-aos="fade-up" data-aos-delay="150">
                    { NativeApps.map((item) =>          
                        <WorkBox title={item.name} paragraph={item.techUsed} link={item.link} img={item.imgUrl}/>
                    )}
                </div>
                <h2 data-aos="fade" data-aos-delay="100">Games</h2>
                <div className='games' data-aos="fade-up" data-aos-delay="150">
                    { Games.map((item) =>   
                        <WorkBox title={item.name} paragraph={item.techUsed} link={item.link} img={item.imgUrl}/>
                    )}
                </div>
            </div>
        </ScWorks>
    );
}
export default Works;