import {useNavigate, useLocation } from 'react-router-dom';
import React from 'react';
import AspIcon from '../../assets/img/asp.png';
import WorkIcon from '../../assets/img/work.png';
import ResumeIcon from '../../assets/img/resume.png';
import LinkedinIcon from '../../assets/img/linkedin.png';
import GmailIcon from '../../assets/img/gmail.png';
import GithubIcon from '../../assets/img/github.png';
import MediumIcon from '../../assets/img/medium.png';
import ScNavbar from './ScNavbar';

const Navbar = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const userName = sessionStorage.getItem("user_name")

    return (
        <ScNavbar>
            <div className='SocialMedia'>            
                <img alt='ASP' src={AspIcon}/>
                <ul>
                    <a href="https://github.com/AhmetSelimPehlivan"><img alt="Github" src={GithubIcon}/></a>
                    <a href="https://www.linkedin.com/in/ahmet-selim-pehlivan-ba147916a/"><img alt="Linkedin" src={LinkedinIcon}/></a>
                    <a href="ahmetselimpehlivan@gmail.com"><img alt="Gmail" src={GmailIcon}/></a>
                </ul>
            </div>
            <div className='Works'>
                <ul>
                    <a href="/Works"><img alt="Works" src={WorkIcon}/></a>
                    <a href="/Resume"><img alt="Resume" src={ResumeIcon}/></a>
                    <a href="/Medium"><img alt="Medium" src={MediumIcon}/></a>
                </ul>
            </div>
        </ScNavbar>
    );
}
export default Navbar;