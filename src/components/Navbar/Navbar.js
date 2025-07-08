import { useState, useEffect } from 'react';
import './Navbar.css';
import linkedin from '../../assets/linkedin.svg';
import whatsapp from '../../assets/whatsapp.png';
import git from '../../assets/git.png';
import { FiSun, FiMoon } from 'react-icons/fi'; // Icons from react-icons

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);
  

  return (
    <nav className="navbar">
      <ul className="navbar-prof-logo">
        <li><img src={linkedin} alt="linkedin" /></li>
        <li><img src={git} alt="git" /></li>
        <li><img src={whatsapp} alt="whatsapp" /></li>
      </ul>
      <ul className="navbar-links">
        <li><h3>About</h3></li>
        <li><h3>Projects</h3></li>
        <li><h3>Skills</h3></li>
        <li><h3>Upload</h3></li>
        <li><h3>Contact</h3></li>
        <button onClick={toggleTheme} className="theme-toggle-btn">
            {isDark ? <FiSun className="theme-icon" /> : <FiMoon className="theme-icon" />}
        </button>  
      </ul>
    </nav>
  );
};

export default Navbar;
