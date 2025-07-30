import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import linkedin from '../../assets/Navbar/linkedin.png';
import crio from '../../assets/Navbar/crio.png';
import git from '../../assets/Navbar/git.png';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleTheme = () => setIsDark(prev => !prev);
  const toggleMenu = () => setShowMenu(prev => !prev);

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <nav className="navbar">
      <div className="menu-toggle-navbar-prof-logo" >
        <ul className="navbar-prof-logo">
          <li className="tooltip-container">
            <button onClick={toggleTheme} className="theme-toggle-btn">
              {isDark ? <FiSun className="theme-icon" /> : <FiMoon className="theme-icon" />}
              <span className="tooltip-text">Theme</span>
            </button>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kamleshsahur/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Kamlesh-Sahu-R" target="_blank" rel="noopener noreferrer">
              <img src={git} alt="git" />
            </a>
          </li>
          <li className="tooltip-container">
            <a href="https://www.crio.do/learn/portfolio/kamleshsahur/" target="_blank" rel="noopener noreferrer">
              <img src={crio} alt="crio portfolio" />
            </a>
            <span className="tooltip-text">Crio Portfolio</span>
          </li>
        </ul>

        {/* Hamburger Icon for small screen */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {showMenu ? <FiX /> : <FiMenu />}
        </div>
  
      </div>
      <div>
        <ul className={`navbar-links ${showMenu ? 'show' : ''}`}>
          <li><h3><Link to="/">Home</Link></h3></li> 
      <li><h3><Link to="/tools">Tools</Link></h3></li>
          <li><h3>About</h3></li>
          <li><a href='#projects' style={{textDecoration: "none"}}><h3>Projects</h3></a></li>
          <li><h3>Skills</h3></li>
          <li><h3>Upload</h3></li>
          <li><h3>Contact</h3></li> 
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
