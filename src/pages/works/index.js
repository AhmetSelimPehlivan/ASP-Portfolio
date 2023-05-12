import ScWorks from './ScWorks';
import WorkBox from '../../components/WorkBox';
import { NativeApps, WebApps, Games } from '../../constants/works';

const works = () => {
    return (
        <ScWorks>
            <h1>My Works</h1>
            <div className='workbox-container'>
            {
                WebApps.map((item) => <WorkBox title={item.name} paragraph={item.techUsed} link={item.link} img={item.imgUrl}/>)
            }
            </div>
        </ScWorks>
    );
}
export default works;