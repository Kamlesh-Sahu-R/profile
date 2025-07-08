// import { useState, useEffect } from 'react';
// import './Navbar.css';
// import linkedin from '../../assets/Navbar/linkedin.png';
// import whatsapp from '../../assets/Navbar/whatsapp.png';
// import git from '../../assets/Navbar/git.png';
// import facebook from '../../assets/Navbar/facebook.png';
// import tweeter from '../../assets/Navbar/twitter.png';
// import insta from '../../assets/Navbar/instagram.png';
// import { FiSun, FiMoon } from 'react-icons/fi'; // Icons from react-icons

// const Navbar = () => {
//   const [isDark, setIsDark] = useState(false);

//   const toggleTheme = () => {
//     setIsDark(prev => !prev);
//   };

//   useEffect(() => {
//     document.body.classList.toggle("dark", isDark);
//   }, [isDark]);
  

//   return (
//     <nav className="navbar">
//       <ul className="navbar-prof-logo">
//         <li><img src={linkedin} alt="linkedin" /></li>
//         <li><img src={git} alt="git" /></li>
//         <li><img src={whatsapp} alt="whatsapp" /></li>
//         <li><img src={facebook} alt="facebook" /></li>
//         <li><img src={tweeter} alt="tweeter" /></li>
//         <li><img src={insta} alt="instagram" /></li>
//       </ul>
//       <ul className="navbar-links">
//         <li><h3>About</h3></li>
//         <li><h3>Projects</h3></li>
//         <li><h3>Skills</h3></li>
//         <li><h3>Upload</h3></li>
//         <li><h3>Contact</h3></li>
//         <button onClick={toggleTheme} className="theme-toggle-btn">
//             {isDark ? <FiSun className="theme-icon" /> : <FiMoon className="theme-icon" />}
//         </button>  
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from 'react';
import './Navbar.css';
import linkedin from '../../assets/Navbar/linkedin.png';
import whatsapp from '../../assets/Navbar/whatsapp.png';
import git from '../../assets/Navbar/git.png';
import facebook from '../../assets/Navbar/facebook.png';
import tweeter from '../../assets/Navbar/twitter.png';
import insta from '../../assets/Navbar/instagram.png';
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
      <ul className="navbar-prof-logo">
        <li><img src={linkedin} alt="linkedin" /></li>
        <li><img src={git} alt="git" /></li>
        <li><img src={whatsapp} alt="whatsapp" /></li>
        <li><img src={facebook} alt="facebook" /></li>
        <li><img src={tweeter} alt="tweeter" /></li>
        <li><img src={insta} alt="instagram" /></li>
      </ul>

      {/* Hamburger Icon for small screen */}
      <div className="menu-toggle" onClick={toggleMenu}>
        {showMenu ? <FiX /> : <FiMenu />}
      </div>

      <ul className={`navbar-links ${showMenu ? 'show' : ''}`}>
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
