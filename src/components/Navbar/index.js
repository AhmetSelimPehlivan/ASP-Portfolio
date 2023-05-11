import React, { useState } from 'react';
import { ThemeContext, themes } from '../../context/ThemeContext';
import MediumIcon from '../../assets/img/medium.svg';
import WorkIcon from '../../assets/img/work.svg';
import ResumeIcon from '../../assets/img/resume.svg';
import LinkedinIcon from '../../assets/img/linkedin.svg';
import GmailIcon from '../../assets/img/email.svg';
import GithubIcon from '../../assets/img/github.svg';
import ToggleDark from '../../components/ToggleDark';
import ScNavbar from './ScNavbar';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <ScNavbar>
            <div className='SocialMedia'>
                <a href="https://github.com/AhmetSelimPehlivan"><img alt="Github" src={GithubIcon}/></a>
                <a href="https://www.linkedin.com/in/ahmet-selim-pehlivan-ba147916a/"><img alt="Linkedin" src={LinkedinIcon}/></a>
                <a href="/Medium"><img alt="Medium" src={MediumIcon}/></a>
                <a href="ahmetselimpehlivan@gmail.com" className='Gmail'><img alt="Gmail" src={GmailIcon}/><p>ahmetselimpehlivan@gmail.com</p></a>
            </div>
            <div className='DarkMode'>
                <ThemeContext.Consumer>
                    {({ changeTheme }) => (
                    <ToggleDark
                        toggleDark={() => {
                        setDarkMode(!darkMode);
                        changeTheme(darkMode ? themes.light : themes.dark);
                        }}
                    />
                    )}
                </ThemeContext.Consumer>
            </div>
            <div className='Works'>
                <a href="/Works"><img alt="Works" src={WorkIcon}/>Work</a>
                <a href="/Resume"><img alt="Resume" src={ResumeIcon}/>Resume</a>
            </div>
        </ScNavbar>
    );
}
export default Navbar;