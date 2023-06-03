import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext, themes } from '../../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLaptopCode, faUniversity, faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import ToggleDark from '../../components/ToggleDark';
import ScNavbar from './ScNavbar';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(true);  
    const [click, setClick] = useState(false);
    
    const handleClick = () => {
        console.log("handleClick");
        setClick(false);
      };
    return (
        <ScNavbar isClicked={click}>
            <ul className='navbar-list'>
                <li className='HomePage'>
                    <Link to="/" className='HomePage'><FontAwesomeIcon icon={faHouseChimney}/></Link>
                    <a href="mailto:ahmetselimpehlivan@gmail.com" className='Gmail'><FontAwesomeIcon icon={faEnvelope}/><p>ahmetselimpehlivan@gmail.com</p></a>
                </li>
                <li className='Works'>
                    <Link to="/works"><FontAwesomeIcon icon={faLaptopCode} />Work</Link>
                    <Link to="/resume"><FontAwesomeIcon icon={faUniversity} />Resume</Link>
                </li>
                <li className='DarkMode'>
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
                </li>
                <li className="nav-icon" onClick={() => setClick(!click)}>
                    <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                </li>
            </ul>
            <ul className='hamburger-list'>
                <Link to="/" className='HomePage' onClick={() => setClick(!click)}><FontAwesomeIcon icon={faHouseChimney}/></Link>
                <a href="mailto:ahmetselimpehlivan@gmail.com" className='Gmail' onClick={() => setClick(!click)}><FontAwesomeIcon icon={faEnvelope}/><p>Mail</p></a>
                <Link to="/works" onClick={() => setClick(!click)}><FontAwesomeIcon icon={faLaptopCode}/>Work</Link>
                <Link to="/resume" onClick={() => setClick(!click)}><FontAwesomeIcon icon={faUniversity}/>Resume</Link>
            </ul>
        </ScNavbar>
    );
}
export default Navbar;