import webapp1 from '../assets/img/illustrators/webapp1.svg';
import webapp2 from '../assets/img/illustrators/webapp2.svg';
import deep1 from '../assets/img/illustrators/deep1.svg';
import deep2 from '../assets/img/illustrators/deep2.svg';
import native1 from '../assets/img/illustrators/native1.svg';
import native2 from '../assets/img/illustrators/native2.svg';
import vr1 from '../assets/img/illustrators/vr1.svg';
import vr2 from '../assets/img/illustrators/vr2.svg';

export const InterestConst = [{
    title: 'Machine Learning',
    paragraph: 'Machine learning is a type of AI that teaches computer systems how to learn and improve from experience, without being directly programmed. It trains them to recognize patterns, and make predictions based on data. I am interested in using machine learning to develop recommendation systems.',
    animation: [{ name: 'webapp1', src: webapp1, style: {bottom: "0px"}}, { name: 'webapp2', src: webapp2, style: {width: "50%", bottom: "0px"}}]
},{
    title: 'Deep Learning',
    paragraph: 'Deep learning is a form of machine learning that trains artificial neural networks to make predictions or decisions based on data. I am interested in using deep learning for image processing. Currently, I am working on classifying yoga poses, and face yoga poses, and detecting skin anomalies on faces. To do this, I use advanced technology, such as TensorFlow 2.0',
    animation: [{ name: 'deep1', src: deep1, style: {bottom: "0px"}}, { name: 'deep2', src: deep2, style: {width: "35%", left: "25px", bottom: "0px"}}]
},{
    title: 'Web and Native Apps',
    paragraph: 'Web apps are accessed through a web browser and run on a remote server. Native apps are developed for specific operating systems like iOS or Android and are installed directly onto a mobile device or computer. They offer better performance. I have experience with Reactjs, Vanilla CSS, Html, and Sass for the frontend side and Nodejs, Nextjs, Flask, Firebase, MongoDB, and MySql for the backend and server side.',
    animation: [{ name: 'native1', src: native1, style: {bottom: "0px"}}, { name: 'native2', src: native2, style: {bottom: "0px"}}]
},{
    title: 'VR/AR Game',
    paragraph: 'VR (Virtual Reality) games create a fully immersive, three-dimensional environment that allows players to interact with a virtual world, while AR (Augmented Reality) games layer digital elements onto the real world through the use of a camera or smart glasses. I am developing a mobile AR goalkeeper game. Also, I developed a Metaschool VR game project.',
    animation: [{ name: 'vr1', src: vr1, style: {bottom: "0px"}}, { name: 'vr2', src: vr2, style: {width: "40%", bottom: "-50px"}}]
}
];