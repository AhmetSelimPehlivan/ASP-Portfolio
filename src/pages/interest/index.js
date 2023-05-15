import React, { useEffect, useState } from 'react';
import ScInterest from './ScInterest';
import { InterestConst } from '../../constants/InterestConst';
import AOS from 'aos';
import "aos/dist/aos.css";

const Interest = () => {
  useEffect(() =>{
    AOS.init({
      duration: 600,
      easing: "ease",
      once: false
    });
    AOS.refresh();
  });
    return (
        <ScInterest>
          <div className='interest' >
              <div className='interest-paragraph'>
                  {
                    InterestConst.map((item, index) =>
                    <div className='interest-box'>
                      <div className='paragraph' data-aos="fade-up" data-aos-delay="150" >
                        <h3>{item.title}</h3>
                        <p>{item.paragraph}</p>  
                      </div>
                      <div className='illusturation'>
                        {item.animation.map((item,index) =>
                        <>
                          {index === 0 
                          ?<img alt={item.name} style={item.style} src={item.src} data-aos="zoom-in" data-aos-duration="750"/>
                          :<img alt={item.name} style={item.style} src={item.src} data-aos="zoom-in-right" data-aos-duration="750"/>
                          }
                        </>
                        )}
                      </div>
                    </div>
                    )
                  }
              </div>
          </div>
        </ScInterest>
    );
}
export default Interest;