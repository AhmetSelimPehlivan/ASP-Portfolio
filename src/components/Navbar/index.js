import React, { useState } from 'react';
import { ThemeContext, themes } from '../../context/ThemeContext';
import WorkIcon from '../../assets/img/work.svg';
import ResumeIcon from '../../assets/img/resume.svg';
import GmailIcon from '../../assets/img/email.svg';
import ToggleDark from '../../components/ToggleDark';
import ScNavbar from './ScNavbar';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <ScNavbar>
            <div className='Mail'>
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