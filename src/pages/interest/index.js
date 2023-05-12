import ScInterest from './ScInterest';
import { Interest } from '../../constants/interest';
import { CSSTransition } from 'react-transition-group';

const interest = () => {
    return (
        <ScInterest>
          <h1>Interest</h1>
          <div className='interest-box'>
            <div className='interest-paragraphs'>
              {
                Interest.map((item) => 
                  <CSSTransition
                  transitionName="example"
                  transitionAppear={true}
                  transitionAppearTimeout={500}
                  transitionEnter={false}
                  transitionLeave={false}>
                    <div className='interest'>
                      <h3>{item.title}</h3>
                      <p>{item.paragraph}</p>  
                    </div>
                  </CSSTransition>
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