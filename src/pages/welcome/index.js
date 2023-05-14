import ScWelcome from './ScWelcome';
import ASP from '../../assets/img/asp_img.png';
import Works from '../works';
import Interest from '../Interest';
import SocialMedia from '../../components/SocialMedia';

const welcome = () => {
    return (
        <ScWelcome>
          <div className='main'>
            <header className='me'>
              <div className='introduction'>
                <h1>Ahmet Selim Pehlivan</h1>
                <p>Software developer with expertise in AI, deep learning, machine learning, web apps, and AR/VR games. 
                  Dedicated to delivering high-quality results and enjoys solving complex problems. 
                  Expert in artificial intelligence, image processing, and web applications, always looking for creative solutions for end-users.
                  Please feel free to contact me if you have anything to convey!</p>
                <SocialMedia/>
              </div>
              <div className='myImage'>
                <img alt='MyImage' src={ASP}/>
              </div>
            </header>
            <h1>Works</h1>
            <Works/>
            <h1>Interest</h1>
            <Interest/>
          </div>
        </ScWelcome>
    );
}
export default welcome;