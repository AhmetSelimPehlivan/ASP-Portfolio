import React, { useEffect, useState } from 'react';
import ScInterest from './ScInterest';
import { InterestConst } from '../../constants/InterestConst';
import { InterestAnimation } from '../../constants/animator';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "gsap/dist/gsap";
gsap.registerPlugin(ScrollTrigger);

const Interest = () => {
    gsap.to('.test', {
      left: "-200%",
      ease: "Strong.easeInOut",
      duration: 1,
      progress: 0.5
    });
    return (
        <ScInterest>
          <h1>Interest</h1>
          <div className='interest-box' >
              <div className='interest-paragraphs'>
                  {
                    InterestConst.map((item, index) =>
                    <div className='interest'>
                      <h3>{item.title}</h3>
                      <p>{item.paragraph}</p>  
                    </div>
                    )
                  }
              </div>
              <div className='interest-illusturation'>
                {
                  InterestAnimation.map((item, index) =>
                    <div className='test'>{item.img}</div>
                  )
                }
              </div>
          </div>
        </ScInterest>
    );
}
export default Interest;