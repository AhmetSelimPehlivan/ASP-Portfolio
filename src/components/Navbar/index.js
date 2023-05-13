import React, { useState } from 'react';
import { ThemeContext, themes } from '../../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLaptopCode, faUniversity } from '@fortawesome/free-solid-svg-icons';
import ToggleDark from '../../components/ToggleDark';
import ScNavbar from './ScNavbar';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <ScNavbar>
            <div className='Mail'>

                <a href="ahmetselimpehlivan@gmail.com" className='Gmail'><FontAwesomeIcon icon={faEnvelope}/><p>ahmetselimpehlivan@gmail.com</p></a>
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
                <a href="/Work"><FontAwesomeIcon icon={faLaptopCode} />Work</a>
                <a href="/Resume"><FontAwesomeIcon icon={faUniversity} />Resume</a>
            </div>
        </ScNavbar>
    );
}
export default Navbar;