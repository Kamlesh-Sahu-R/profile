import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-left">
          <h2>Kamlesh Sahu</h2>
          <p>Frontend Developer | JavaScript | React</p>
        </div>

        <div className="footer-section footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-section footer-social">
            <a href="https://github.com/Kamlesh-Sahu-R" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://linkedin.com/in/kamleshsahur/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="mailto:kamleshsahur@gmail.com">
                <FaEnvelope />
            </a>
            <a href="#facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
            </a>
            <a href="#instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            <a href="#tweeter" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
            </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Kamlesh Sahu. All rights reserved.</p>
      </div>
    </footer>
  );
}
