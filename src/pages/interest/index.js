import ScInterest from './ScInterest';
import { Interest } from '../../constants/interest';

const interest = () => {
    return (
        <ScInterest>
          <h1>Interest</h1>
          <div className='interest-box'>
            <div className='interest-paragraphs'>
              {
                Interest.map((item) => 
                  <div className='interest'>
                    <h3>{item.title}</h3>
                    <p>{item.paragraph}</p>  
                  </div>
                )
              }
            </div>
            <div className='interest-illusturation'>
              <img></img>
            </div>
          </div>
        </ScInterest>
    );
}
export default interest;