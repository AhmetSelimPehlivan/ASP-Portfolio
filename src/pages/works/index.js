import React, { useState } from "react";
import ScWorks from './ScWorks';
import WorkBox from '../../components/WorkBox';
import { NativeApps, WebApps, Games } from '../../constants/works';

const Works = () => {
    return (
        <ScWorks>
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
        </ScWorks>
    );
}
export default Works;