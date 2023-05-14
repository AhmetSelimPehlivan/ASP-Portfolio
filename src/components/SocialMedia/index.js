import ScSocialMedia from './ScSocialMedia';
import { SocialMediaConst } from '../../constants/socialmedia';

const SocialMedia = () => {
    return (
        <ScSocialMedia>
            {SocialMediaConst.map((item) => <><a href={item.link} className='interaction-button social'>{item.imgUrl}</a></>)}    
        </ScSocialMedia>
    );
}
export default SocialMedia;